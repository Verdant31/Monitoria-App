import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarList from "../../../components/Monitor/Calendar/CalendarList";
import { getDate } from "../../../utils/functions";
import { styles } from "./styles";

const Calendar = () => {
  const date = getDate();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Minha agenda</Text>
      <Text style={styles.subTitle}>{date} (Hoje)</Text>
      <CalendarList />
    </SafeAreaView>
  )
}
export default Calendar;