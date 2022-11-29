import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native"
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../../contexts/AuthContext";
import { api } from "../../../services/axios";
import { styles } from './styles';

const CriarSolicitacao = () => {
  const [ solicitacaoFoiEnviada, setSolicitacaoFoiEnviada ] = useState(false);
  const [ disciplina, setDisciplina ] = useState('');
  const [ monitorRecomendado, setMonitorRecomendado ] = useState('');
  const [ motivo, setMotivo ] = useState('');
  const { aluno } = useAuth();

  const handleEnviarSolicitacao = async () => {
    setSolicitacaoFoiEnviada(true);
    await api.post('/aluno/solicitar/vaga/monitoria', {
      matricula_aluno: aluno.matricula, 
      codigo_disciplina: disciplina, 
      motivo,
      monitor_recomendado: monitorRecomendado
    }).then(() => {
      setDisciplina('')
      setMonitorRecomendado('')
      setMotivo('')
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    if(solicitacaoFoiEnviada) {
      setTimeout(() => {
        setSolicitacaoFoiEnviada(false)
      }, 5000)
    }
  }, [solicitacaoFoiEnviada])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Formulário</Text>
      <View style={styles.form}>
        <View style={styles.fieldContainer}>
          <Text style={{fontSize: 16}}>Código da disciplina desejada</Text>
          <TextInput value={disciplina} onChangeText={setDisciplina}  style={styles.input} placeholder="Entre com a disciplina" placeholderTextColor='#555555' />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={{fontSize: 16}}>Tem um monitor para recomendar?</Text>
          <TextInput value={monitorRecomendado} onChangeText={setMonitorRecomendado}  style={styles.input} placeholder="Entre com o nome do monitor" placeholderTextColor='#555555' />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={{fontSize: 16}}>Deseja contar o motivo da solicitação?</Text>
          <TextInput value={motivo} onChangeText={setMotivo} style={styles.input} placeholder="Entre com a descrição" placeholderTextColor='#555555' />
        </View>
      </View>
      {solicitacaoFoiEnviada && (
        <Text style={{fontSize: 16, color: '#4bb543', marginTop: 20}}>Sua solicitação foi enviada!</Text>
      )}
      <View style={{width: '80%', marginTop: 20}}>
        <Button onPress={handleEnviarSolicitacao} style={styles.updateButton} title="Enviar solicitação" />
      </View>
    </SafeAreaView>
  )
}

export default CriarSolicitacao;