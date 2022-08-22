import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../../RootStackParams";
import { styles } from "./styles";

type AlunoProps = NativeStackNavigationProp<RootStackParamList, 'Aluno'>;


const MonitoriaInfo = () => {
  const navigation = useNavigation<AlunoProps>();

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
          <Text style={{fontSize: 18, fontWeight: '600'}}>Email para contato</Text>
          <Text style={{fontSize: 18, marginTop: 5}}>verdantxd@gmail.com</Text>
        </View>
      </View>
      <View style={{width: '100%'}}>
        <Button onPress={() => navigation.navigate('AgendarHorario')} style={styles.updateButton} title="Agendar horário" />
      </View>
    </SafeAreaView>
  )
}
export default MonitoriaInfo;