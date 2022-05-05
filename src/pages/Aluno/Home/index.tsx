import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MonitorsList from '../../../components/Aluno/Home/MonitorsList'
import SearchBar from '../../../components/Aluno/Home/SearchBar'
import { styles } from './styles'

const AlunoHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Monitores | Disciplinas</Text>
      <SearchBar />
      <MonitorsList />
    </SafeAreaView>
  )
}

export default AlunoHome