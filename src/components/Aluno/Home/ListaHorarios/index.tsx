import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import ConfirmarReuniaoDialog from '../ConfirmarReuniaoDialog';
import { api } from '../../../../services/axios';

interface ListaHorarios {
  idMonitoria: string;
  disciplina: string;
  monitor: string;
  dia: string;
}

type Horario = {
  disponivel: boolean;
  horario: string;
}

const getDayTwo =(day: string) => {
  switch (day) {
    case 'Segunda':
        return - 1
    case 'Terca':
        return  2
    case 'Quarta':
        return  3
    case 'Quinta':
        return  4
    case 'Sexta':
        return  5
    default:
      return 0;
  }
}

const getDay = (day: string) : number => {
  const todayDay = new Date().getDay() + 2;
  const dayInNumber = getDayTwo(day)
  if((dayInNumber - todayDay) >= 0) {
    return  dayInNumber - todayDay;
  }
  switch (day) {
    case 'Segunda':
        return 6;
    case 'Terca':
        return 7;
    case 'Quarta':
        return 8;
    case 'Quinta':
        return 9;
    case 'Sexta':
        return 10;
    default:
      return 0;
  }
}



function _getDay(dia_entrada){
  const _dias = {
    'Domingo': 0,
    'Segunda':1,
    'Terca':2,
    "Quarta":3,
    "Quinta":4,
    "Sexta":5,
    "Sabado":6
  }
  const hoje = new Date(Date.now());
  const dia_de_hoje = new Date(Date.now()).getDay(); //2
  const dia_da_monitoria = _dias[dia_entrada];//1
  if (dia_da_monitoria >= dia_de_hoje){
      const dias_a_somar = dia_da_monitoria - dia_de_hoje;
      console.log("daqui ", dias_a_somar, "dias");
      return dias_a_somar
  }
  if(dia_da_monitoria < dia_de_hoje){
    const dias_a_somar = dia_da_monitoria - dia_de_hoje + 7;
    return dias_a_somar;
  }
}

const ListaHorarios = ({idMonitoria, disciplina, monitor, dia }: ListaHorarios) => {
  const [ horarioEscolhido, setHorarioEscolhido ] = useState('');
  const [ horarios, setHorarios ] = useState<Horario[]>();
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    const fecthPerfil = async () => {
      await api.get(`/aluno/agendamento/horarios/${idMonitoria}`).then(res => {
        setHorarios(res.data.horarios);
      })
    }
    fecthPerfil();
  },[])
  const options = {  year: 'numeric', month: 'numeric', day: 'numeric' };
  console.log(new Date().toLocaleDateString('pt-BR', options))

  var dateobj = new Date(new Date().setDate(new Date().getDate() + _getDay(dia)));
  function pad(n) {
     return n < 10 ? "0"+n : n;
  }
  var month = ["01", "02", "03", "04", "05", "06", "07","08", "09", "10", "11", "12"];
  var result = pad(dateobj.getDate())+"/"+ month[dateobj.getMonth()] +"/"+dateobj.getFullYear();
  console.log(result);
  const data = {
    horario: horarioEscolhido,
    disciplina,
    monitor,
    dia: result.split(/\//),
    idMonitoria
  }


  const handleOpenModal = (horario: string) => {
    setHorarioEscolhido(horario);
    setIsModalOpen(true);
  }

  const renderItem = ({ item }:any) => {
    return (
      <>
        {item.disponivel  
          ? (
            <TouchableOpacity onPress={() => handleOpenModal(item.horario)}>
              <View style={styles.timeCard}>
                <Text style={{fontSize: 24}}>{item.horario}</Text>
              </View>
            </TouchableOpacity>
          )
          : (
            <View style={styles.timeCardOff}>
              <Text style={{fontSize: 24}}>{item.horario}</Text>
            </View>
          )
        }
      </>
    )
  }
  return (
    <>
      <FlatList
        keyExtractor={(item) => item.horario.valueOf()}
        renderItem={renderItem}
        data={horarios}
        numColumns={3}
      />
      <ConfirmarReuniaoDialog data={data} isOpen={isModalOpen} closeModal={closeModal}/>
    </>
  )
}

export default ListaHorarios