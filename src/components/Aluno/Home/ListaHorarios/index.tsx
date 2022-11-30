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

const getDay = (day: string) : number => {
  const todayDay = new Date().getDay();
  switch (day) {
    case 'Segunda':
      return Math.abs(todayDay - 1)
    case 'Terca':
      return Math.abs(todayDay - 2)
    case 'Quarta':
      return Math.abs(todayDay - 3)
    case 'Quinta':
      return Math.abs(todayDay - 4)
    case 'Sexta':
      return Math.abs(todayDay - 5)
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