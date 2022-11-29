import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../RootStackParams";
import SolicitacoesDosAlunosLista from "../../../../components/Monitor/Monitorias/SolicitacoesDosAlunosLista";
import { api } from "../../../../services/axios";

type Details = {
  horario : string;
  nome_aluno : string;
  matricula_aluno : string;
  status : string;
  id_agendamento: string;
}

type MonitoriaDetails = NativeStackScreenProps<RootStackParamList, 'MonitoriaDetails'>;

const DetalhesMonitoria = ({ route }: MonitoriaDetails) => {
  const [ currentOption, setCurrentOption ] = useState('Finalizadas' || 'Pendentes')
  const [ finishedSolicitations, setFinishedSolicitations ] = useState<Details[]>([]);
  const [ inProgressSolicitations, setInProgressSolicitations ] = useState<Details[]>([]); 

  useEffect(() => {
    const fetchSolicitacoes = async () => {
      await api.get(`aluno/monitor/agendamento/${route.params.codigo_monitoria}`).then(res => {
        res.data.agendamentos.map((monitoria : Details) => {
          if(monitoria.status === 'Aprovado') setFinishedSolicitations(oldState => [...oldState, monitoria])
          if(monitoria.status === 'Pendente') setInProgressSolicitations(oldState => [...oldState, monitoria])
        })
      }).catch(err => console.log(err))
    }
    fetchSolicitacoes();
  }, []);

  const removeFromList = (id: string) => {
    setInProgressSolicitations(oldState => oldState.filter(solicitation => solicitation.id_agendamento !== id))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Solicitações</Text>    
      <View style={styles.optionsContainer}>
        <Button onPress={() => setCurrentOption('Finalizadas')} title="Finalizadas" />
        <Button  onPress={() => setCurrentOption('Pendentes')} title="Pendentes" />
      </View>
      {currentOption === 'Finalizadas'
        ? <SolicitacoesDosAlunosLista solicitations={finishedSolicitations} removeFromList={removeFromList} />
        : <SolicitacoesDosAlunosLista solicitations={inProgressSolicitations} removeFromList={removeFromList} />
      } 
    </SafeAreaView>
  )
}
export default DetalhesMonitoria;