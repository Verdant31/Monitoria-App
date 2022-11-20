import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import ListaDeSolicitacoes from '../../../components/Monitor/Home/ListaDeSolicitacoes';
import { Searchbar } from 'react-native-paper';

const Vagas = () => {
  const [ filter, setFilter ] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} >Vagas abertas</Text>
      <View>
        <Searchbar 
          value={filter}
          onChangeText={setFilter}
          placeholder="Procure por uma vaga..."
          style={styles.searchBar}
        />
      </View>
      <ListaDeSolicitacoes filter={filter} />
    </SafeAreaView>
  )
}

export default Vagas