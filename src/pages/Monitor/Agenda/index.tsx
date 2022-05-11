import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AgendaLista from "../../../components/Monitor/Agenda/AgendaLista";
import { getDate } from "../../../utils/functions";
import { styles } from "./styles";

const Agenda = () => {
  const date = getDate();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Minha agenda</Text>
      <Text style={styles.subTitle}>{date} (Hoje)</Text>
      <AgendaLista />
    </SafeAreaView>
  )
}
export default Agenda;