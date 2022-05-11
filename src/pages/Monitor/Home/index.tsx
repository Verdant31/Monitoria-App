import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../../components/Monitor/Home/SearchBar';
import { styles } from './styles';
import ListaDeSolicitacoes from '../../../components/Monitor/Home/ListaDeSolicitacoes';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} >Solicitações</Text>
      <SearchBar />
      <ListaDeSolicitacoes />
    </SafeAreaView>
  )
}

export default Home