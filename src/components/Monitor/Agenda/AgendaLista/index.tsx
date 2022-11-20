import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
type Horario = {
  nome: string;
  horario: string;
  nome_disciplina: string;
}
interface AgendaLista {
  horarios: Horario[];
}
const AgendaLista = ({ horarios }: AgendaLista) => {
  const renderItem = ({ item }:any) => (
    <View style={styles.meetingCard}> 
      <Text style={{fontSize: 18, fontWeight: '500'}}>Horário: {item.horario}</Text>
      <Text style={{fontSize: 18}}>Aluno: {item.nome}</Text>
      <Text style={{fontSize: 18}}>Disciplina: {item.nome_disciplina}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.horario}
          style={{ marginTop: 60 }}
          data={horarios}
          renderItem={renderItem}
        />
    </View>
  )
}
export default AgendaLista;