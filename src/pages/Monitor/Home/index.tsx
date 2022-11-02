import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../../components/Monitor/Home/SearchBar';
import { styles } from './styles';
import ListaDeSolicitacoes from '../../../components/Monitor/Home/ListaDeSolicitacoes';
import { Searchbar } from 'react-native-paper';

const Home = () => {
  const [ filter, setFilter ] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} >Solicitações</Text>
      <View>
        <Searchbar 
          value={filter}
          onChangeText={setFilter}
          placeholder="Procure por uma solicitação..."
          style={styles.searchBar}
        />
      </View>
      <ListaDeSolicitacoes filter={filter} />
    </SafeAreaView>
  )
}

export default Home