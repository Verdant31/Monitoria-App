import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListaHorarios from "../../../../components/Aluno/Home/ListaHorarios";
import { RootStackParamList } from "../../../RootStackParams";
import { styles } from "./styles";

type HorarioProps = NativeStackScreenProps<RootStackParamList, 'AgendarHorario'>;

const AgendarHorario = ({ route }: HorarioProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha um horário para sua monitoria</Text>
      <ListaHorarios 
        idMonitoria={route.params.id_monitoria} 
        monitor={route.params.monitor} 
        disciplina={route.params.disciplina}
        dia={route.params.dia}
      />
    </SafeAreaView>
  )
}
export default AgendarHorario;