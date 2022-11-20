import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AgendaLista from "../../../../components/Monitor/Agenda/AgendaLista";
import { api } from "../../../../services/axios";
import { getDate } from "../../../../utils/functions";
import { styles } from "./styles";

type Horario = {
  nome: string;
  horario: string;
  nome_disciplina: string;
}

const AgendaAluno = () => {
  const [ horarios, setHorarios ] = useState<Horario[]>([]);
  const date = getDate();

  useEffect(() => {
    const fecthHorarios = async () => {
      await api.get('/aluno/agendamentos').then(res => {
        setHorarios(res.data.vagas_monitorias.map((vaga) => {
          return {
            nome: vaga.nome_monitor,
            horario: vaga.horario.split('T')[1].split('Z')[0].split('.')[0],
            nome_disciplina: vaga.nome_disciplina
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
      <AgendaLista horarios={horarios}/>
    </SafeAreaView>
  )
}
export default AgendaAluno;