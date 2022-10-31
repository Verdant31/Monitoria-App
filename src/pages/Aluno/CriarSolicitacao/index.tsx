import { useState } from "react";
import { Text, TextInput, View } from "react-native"
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../../contexts/AuthContext";
import { api } from "../../../services/axios";
import { styles } from './styles';

const CriarSolicitacao = () => {
  const [ disciplina, setDisciplina ] = useState('');
  const [ monitorRecomendado, setMonitorRecomendado ] = useState('');
  const [ motivo, setMotivo ] = useState('');
  const { aluno } = useAuth();

  const handleEnviarSolicitacao = async () => {
    await api.post('/aluno/solicitar/vaga/monitoria', {
      matricula_aluno: aluno.matricula, 
      codigo_disciplina: disciplina, 
      motivo,
      monitor_recomendado: monitorRecomendado
    }).then((res) => {
      console.log(res);
    }).catch(err => console.log(err))
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Formulário</Text>
      <View style={styles.form}>
        <View style={styles.fieldContainer}>
          <Text style={{fontSize: 16}}>Código da disciplina desejada</Text>
          <TextInput onChangeText={setDisciplina}  style={styles.input} placeholder="Entre com a disciplina" placeholderTextColor='#555555' />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={{fontSize: 16}}>Tem um monitor para recomendar?</Text>
          <TextInput onChangeText={setMonitorRecomendado}  style={styles.input} placeholder="Entre com o nome do monitor" placeholderTextColor='#555555' />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={{fontSize: 16}}>Deseja contar o motivo da solicitação?</Text>
          <TextInput  onChangeText={setMotivo} style={styles.input} placeholder="Entre com a descrição" placeholderTextColor='#555555' />
        </View>
      </View>
      <View style={{width: '100%'}}>
        <Button onPress={handleEnviarSolicitacao} style={styles.updateButton} title="Enviar solicitação" />
      </View>
    </SafeAreaView>
  )
}

export default CriarSolicitacao;