import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HorariosList from "../../../../components/Aluno/Home/HorariosList";
import { styles } from "./styles";

const AgendarHorario = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha um horário para sua monitoria</Text>
      <HorariosList />
    </SafeAreaView>
  )
}
export default AgendarHorario;