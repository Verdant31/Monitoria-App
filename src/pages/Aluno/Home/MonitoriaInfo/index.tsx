import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from "../../../../services/axios";
import { RootStackParamList } from "../../../RootStackParams";
import { styles } from "./styles";

type AlunoProps = NativeStackNavigationProp<RootStackParamList, 'Monitoria'>;

type MonitoriaDetails = {
  email_contato: string
  horario_monitoria: string
  nome_aluno: string;
  nome_disciplina: string;
  nome_professor: string;
  id_monitoria: string;
  dia: string;
}

const MonitoriaInfo = () => {
  const [ monitoriaDetails, setMonitoriaDetails ] = useState<MonitoriaDetails>();
  const navigation = useNavigation<AlunoProps>();
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
      <Text style={styles.title}>Dados da monitoria</Text>
      {monitoriaDetails 
        ? (
          <>
             <View style={styles.requirementsContainer}>
              <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>Aluno mentor</Text>
                <Text style={{fontSize: 18, marginTop: 5}}>{monitoriaDetails.nome_aluno}</Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>Professor vinculado</Text>
                <Text style={{fontSize: 18, marginTop: 5}}>{monitoriaDetails.nome_professor}</Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>Disciplina</Text>
                <Text style={{fontSize: 18, marginTop: 5}}>{monitoriaDetails.nome_disciplina}</Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>Horário de contato</Text>
                <Text style={{fontSize: 18, marginTop: 5}}>{(new Date(monitoriaDetails.horario_monitoria).toLocaleTimeString())}</Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>Email para contato</Text>
                <Text style={{fontSize: 18, marginTop: 5}}>{monitoriaDetails.email_contato}</Text>
              </View>
            </View>
            <View style={{width: '80%'}}>
              <Button onPress={() => navigation.navigate('AgendarHorario', {
                id_monitoria: monitoriaDetails.id_monitoria,
                monitor: monitoriaDetails.nome_aluno,
                disciplina: monitoriaDetails.nome_disciplina,
                dia: monitoriaDetails.dia
              })} title="Agendar horário" />
            </View>
          </>
        )
        : (
          <Text>Carregando</Text>
        )
      }
     
    </SafeAreaView>
  )
}
export default MonitoriaInfo;