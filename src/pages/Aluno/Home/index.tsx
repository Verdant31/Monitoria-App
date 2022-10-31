import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ListaMonitores from '../../../components/Aluno/Home/ListaMonitores'
import { styles } from './styles'
import { Searchbar } from 'react-native-paper'

const AlunoHome = () => {
  const [ filter, setFilter ] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Monitores | Disciplinas</Text>
        <View>
          <Searchbar
            value={filter}
            onChangeText={setFilter}
            placeholder="Procure por uma matéria..."
            style={styles.searchBar}
          />
        </View>
      <ListaMonitores filter={filter} />
    </SafeAreaView>
  )
}

export default AlunoHome