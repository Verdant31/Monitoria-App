import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from "../../../services/axios";
import { RootStackParamList } from "../../RootStackParams";
import { styles } from "./styles";

type AlunoProps = NativeStackNavigationProp<RootStackParamList, 'Monitoria'>;
type MonitoriaDetails = {
  email_contato: string
  horario_monitoria: string
  nome_aluno: string;
  nome_disciplina: string;
  nome_professor: string;
}

const Candidaturas = () => {
  //TODO Pegar as candidaturas que esse aluno enviou 
  const [ monitoriaDetails, setMonitoriaDetails ] = useState<MonitoriaDetails>();
  const { params } = useRoute();

  useEffect(() => {
    const fetchMonitoriaDetails = async () => {
      await api.post('/aluno/monitoria', params).then(res => {
        setMonitoriaDetails(res.data)
      })
    }
    fetchMonitoriaDetails();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {monitoriaDetails 
        ? (
          <>
           
          </>
        )
        : (
          <Text>Carregando</Text>
        )
      }
     
    </SafeAreaView>
  )
}
export default Candidaturas;