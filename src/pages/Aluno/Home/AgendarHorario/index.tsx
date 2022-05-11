import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListaHorarios from "../../../../components/Aluno/Home/ListaHorarios";
import { styles } from "./styles";

const AgendarHorario = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha um horário para sua monitoria</Text>
      <ListaHorarios />
    </SafeAreaView>
  )
}
export default AgendarHorario;