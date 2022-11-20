import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from "../../../services/axios";
import { RootStackParamList } from "../../RootStackParams";
import { styles } from "./styles";

type Candidatura = {
  motivo: string;
  status: string;
  nome_disciplina: string;
}

const Candidaturas = () => {
  //TODO Pegar as candidaturas que esse aluno enviou 
  const [ candidaturas, setCandidaturas ] = useState<Candidatura[]>();

  useEffect(() => {
    const fetchCandidaturas = async () => {
      await api.post('/aluno/candidaturas').then(res => {
        setCandidaturas(res.data.candidaturasJson)
      })
    }
    fetchCandidaturas();
  }, [])

  const renderItem = ({ item }:any) => {
    return (
      <View style={styles.solicitationCard} key={item.nome_disciplina}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>{item.nome_disciplina}</Text>
        <Text style={{fontSize: 18}}>Status: {item.status === 0 ? 'Pendente' : item.status === 2 ? 'Aprovado' : 'Reprovado'}</Text>
        {item.motivo !== null && (
          <Text style={{fontSize: 18}}>Motivo: {item.motivo}</Text>
        )}
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      {candidaturas 
        ? (
          <View style={styles.listContainer}>
            <FlatList
              style={{ marginTop: 60 }}
              data={candidaturas}
              renderItem={renderItem}
            />
          </View>
        )
        : (
          <Text>Carregando</Text>
        )
      }
     
    </SafeAreaView>
  )
}
export default Candidaturas;