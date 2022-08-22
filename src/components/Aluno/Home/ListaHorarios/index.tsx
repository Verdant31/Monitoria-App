import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Dimensions } from "react-native";
import ConfirmarReuniaoDialog from '../ConfirmarReuniaoDialog';


const ListaHorarios = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const closeModal = () => setIsModalOpen(false)

  const horarios = ['15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00',]

  const renderItem = ({ item }:any) => {
    const random = Math.random() * 100;
    
    return (
      <>
        {random > 50 
          ? (
            <TouchableOpacity onPress={() => setIsModalOpen(true)}>
              <View style={styles.timeCard}>
                <Text style={{fontSize: 24}}>{item}</Text>
              </View>
            </TouchableOpacity>
          )
          : (
            <View style={styles.timeCardOff}>
              <Text style={{fontSize: 24}}>{item}</Text>
            </View>
          )
        }
      </>
    )
  }

  return (
    <>
      <FlatList
        keyExtractor={(item) => item.valueOf()}
        renderItem={renderItem}
        data={horarios}
        numColumns={3}
      />
      <ConfirmarReuniaoDialog isOpen={isModalOpen} closeModal={closeModal}/>
    </>
  )
}

export default ListaHorarios