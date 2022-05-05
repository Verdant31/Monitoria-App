import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const MonitoriaInfo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dados da monitoria</Text>
      <View style={styles.requirementsContainer}>
        <View style={{marginBottom: 10}}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Aluno mentor</Text>
          <Text style={{fontSize: 18, marginTop: 5}}>João Pedro Piovesan</Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Professor vinculado</Text>
          <Text style={{fontSize: 18, marginTop: 5}}>Leandro Escobar</Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Disciplina</Text>
          <Text style={{fontSize: 18, marginTop: 5}}>Sistemas Inteligentes Avançados</Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Horário de contato</Text>
          <Text style={{fontSize: 18, marginTop: 5}}>14:00pm as 16:00pm - Bloco vermelho - Lab 1</Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Numero para contato</Text>
          <Text style={{fontSize: 18, marginTop: 5}}>(67)99973-6552</Text>
        </View>
      </View>
      <View style={{width: '100%'}}>
        <Button onPress={() => console.log('hehe')} style={styles.updateButton} title="Contato" />
      </View>
    </SafeAreaView>
  )
}
export default MonitoriaInfo;