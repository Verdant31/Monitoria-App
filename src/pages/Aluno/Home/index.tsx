import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ListaMonitores from '../../../components/Aluno/Home/ListaMonitores'
import { styles } from './styles'
import BarraDePesquisa from '../../../components/Aluno/Home/ BarraDePesquisa'

const AlunoHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Monitores | Disciplinas</Text>
      <BarraDePesquisa />
      <ListaMonitores />
    </SafeAreaView>
  )
}

export default AlunoHome