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
  
  const data = {
    horario: horarioEscolhido,
    disciplina,
    monitor,
    dia: new Date(new Date().setDate(new Date().getDate() + getDay(dia))).toLocaleDateString().split(/\//),
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