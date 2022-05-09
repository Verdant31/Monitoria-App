import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useAuth } from "../../../../contexts/AuthContext";
import { Meeting, Solicitacao } from "../../../../utils/types";
import { styles } from "./styles";

const CalendarList = () => {
  const [ meetings, setMeetings ] = useState<Meeting[]>([]);
  const { aluno } = useAuth();

  useEffect(() => {
    if(aluno?.monitorias) {
      aluno.monitorias.map((monitoria) => {
        if(monitoria.solicitacoes) {
          monitoria.solicitacoes.map((solicitation) => {
            const meeting : Meeting = {
              agendamento: solicitation.agendamento,
              nomeAluno: solicitation.nomeAluno,
              disciplina: monitoria.nomeDisciplina,
              matriculaAluno: solicitation.matriculaAluno
            }
            setMeetings(oldState => [...oldState, meeting])
          })
        }
      })
    }
  },[])

  const renderItem = ({ item }:any) => (
    <View style={styles.meetingCard}> 
      <Text style={{fontSize: 18, fontWeight: '500'}}>Horário: {item.agendamento}</Text>
      <Text style={{fontSize: 18}}>Aluno: {item.nomeAluno}</Text>
      <Text style={{fontSize: 18}}>Disciplina: {item.disciplina}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.matriculaAluno}
          style={{ marginTop: 60 }}
          data={meetings}
          renderItem={renderItem}
        />
    </View>
  )
}
export default CalendarList;