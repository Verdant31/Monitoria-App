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
  dia: string;
}

const Agenda = () => {
  const [ horarios, setHorarios ] = useState<Horario[]>([]);
  useEffect(() => {
    const fecthHorarios = async () => {
      await api.get('/aluno/monitor/agendamentos').then(res => {
        setHorarios(res.data.agendamentos.map((vaga) => {
          return {
            dia: vaga.dia,
            nome: vaga.nome_aluno,
            horario: vaga.horario.split('T')[1].split('Z')[0].split('.')[0].split(':00'),
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
      <AgendaLista horarios={horarios} />
    </SafeAreaView>
  )
}
export default Agenda;