import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Text, View } from "react-native"
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from "../../../../services/axios";
import { RootStackParamList } from "../../../RootStackParams";
import { styles } from "./styles";

type SolicitacaoDetails = NativeStackScreenProps<RootStackParamList, 'Solicitacao'>;

const Solicitacao = ({route} : SolicitacaoDetails) => {
  const [ preRequisito, setPreRequisito ] = useState<string[]>([])
 
  useEffect(() => {
    const fetchPreRequisito = async () => {
      await api.post('/aluno/monitor/prerequisitos', { id_solicitacao: route.params.vaga }).then((res) => {
        setPreRequisito(res.data.pre_requisito.pre_requisito.split(','))
      })
    }
    fetchPreRequisito();
  }, [])

  const handleCadidatar = async () => {
    await api.post('/aluno/vagasmonitoria/candidatar', { vaga: route.params.vaga }).catch(err => console.log(err))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 24, color: '#f2f2f2', fontWeight: '600'}}>Pré requisitos</Text>
      <View style={styles.requirementsContainer}>
        {preRequisito.map((preRequisito) => (
          <Text key={preRequisito}>{`\u2022 ${preRequisito}`}</Text>
        ))}
      </View>
      <Button onPress={handleCadidatar} title="Confirmar solicitação" />
    </SafeAreaView>
  )
}

export default Solicitacao;