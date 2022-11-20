import { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AgendaLista from "../../../components/Monitor/Agenda/AgendaLista";
import { api } from "../../../services/axios";
import { getDate } from "../../../utils/functions";
import { styles } from "./styles";

type Horario = {
  nome: string;
  horario: string;
  nome_disciplina: string;
}

const Agenda = () => {
  const [ horarios, setHorarios ] = useState<Horario[]>([]);
  const date = getDate();

  useEffect(() => {
    const fecthHorarios = async () => {
      await api.get('/aluno/monitor/agendamentos').then(res => {
        setHorarios(res.data.agendamentos.map((vaga) => {
          return {
            nome: vaga.nome_aluno,
            horario: vaga.horario.split('T')[1].split('Z')[0].split('.')[0],
            nome_disciplina: vaga.disciplina
          }
        }))
      }).catch(err => console.log(err))
    }
    fecthHorarios();
  },[])


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Minha agenda</Text>
      <Text style={styles.subTitle}>{date} (Hoje)</Text>
      <AgendaLista horarios={horarios} />
    </SafeAreaView>
  )
}
export default Agenda;