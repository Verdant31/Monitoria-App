import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native"
import { RootStackParamList } from "../../RootStackParams";
import { styles } from './styles';
import { Searchbar } from "react-native-paper";
import ListaMonitores from "../../../components/Aluno/Home/ListaMonitores";

type AlunoProps = NativeStackNavigationProp<RootStackParamList, 'Aluno'>;

const AlunoHome = () => {
  const [ filter, setFilter ] = useState('');
  const navigation = useNavigation<AlunoProps>();

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
          <View style={{marginTop: 20}}/>
          <Button title="Minhas candidaturas" onPress={() => navigation.navigate('Candidaturas')} />
        </View>
      <ListaMonitores filter={filter} />
    </SafeAreaView>
  )
}

export default AlunoHome