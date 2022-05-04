import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MonitoriasList from '../../../components/Monitor/Monitorias/MonitoriasList';
import { styles } from './styles';

const Monitorias = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Minhas monitorias</Text>
      <MonitoriasList />
    </SafeAreaView>
  )
}

export default Monitorias