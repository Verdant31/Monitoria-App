import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from "../../../services/axios";
import { styles } from "./styles";

type Candidatura = {
  motivo: string;
  status: string;
  nome_disciplina: string;
}

const Candidaturas = () => {
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
        <Text style={{fontSize: 18}}>Status: {item.status === 0 || item.status === 1 ? 'Pendente' : item.status === 2 ? 'Aprovado' : 'Reprovado'}</Text>
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