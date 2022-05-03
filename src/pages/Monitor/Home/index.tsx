import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../../components/Monitor/Home/SearchBar';
import SolicitationList from '../../../components/Monitor/Home/SolicitationList';
import { styles } from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} >Solicitações</Text>
      <SearchBar />
      <SolicitationList />
    </SafeAreaView>
  )
}

export default Home