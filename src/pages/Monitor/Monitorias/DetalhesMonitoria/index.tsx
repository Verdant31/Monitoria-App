import { useEffect, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';
import data from '../../../../../alunos.json';
import { Solicitacao } from '../../../../utils/types';
import { useAuth } from "../../../../contexts/AuthContext";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../RootStackParams";
import SolicitacoesDosAlunosLista from "../../../../components/Monitor/Monitorias/SolicitacoesDosAlunosLista";

type MonitoriaDetails = NativeStackScreenProps<RootStackParamList, 'MonitoriaDetails'>;

const DetalhesMonitoria = ({ route }: MonitoriaDetails) => {
  const [ currentOption, setCurrentOption ] = useState('Finalizadas' || 'Pendentes')
  const [ finishedSolicitations, setFinishedSolicitations ] = useState<Solicitacao[]>([]);
  const [ inProgressSolicitations, setInProgressSolicitations ] = useState<Solicitacao[]>([]); 
  const { aluno } = useAuth();

  useEffect(() => {
    if(aluno?.monitorias) {
      aluno.monitorias.map((monitoria) => {
        if(monitoria.codigoDisciplina === route.params.codigoDisciplina && monitoria.solicitacoes) {
          monitoria.solicitacoes.map((solicitation) => {
            if(solicitation.finalizada === true) setFinishedSolicitations(oldState => [...oldState, solicitation])
            if(solicitation.finalizada === false) setInProgressSolicitations(oldState => [...oldState, solicitation])
          })
        }
      })
    }
  },[])


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Solicitações</Text>    
      <View style={styles.optionsContainer}>
        <Button color={currentOption === 'Finalizadas' ? '' : 'white'}onPress={() => setCurrentOption('Finalizadas')} title="Finalizadas" />
        <Button color={currentOption === 'Finalizadas' ? 'white' : ''} onPress={() => setCurrentOption('Pendentes')} title="Pendentes" />
      </View>
      {currentOption === 'Finalizadas'
        ? <SolicitacoesDosAlunosLista solicitations={finishedSolicitations} />
        : <SolicitacoesDosAlunosLista solicitations={inProgressSolicitations} />
      } 
    </SafeAreaView>
  )
}
export default DetalhesMonitoria;