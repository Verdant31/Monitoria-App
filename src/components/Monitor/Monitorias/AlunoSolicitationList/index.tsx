import { FlatList, Text, View } from "react-native";
import { Solicitacao } from "../../../../utils/types";
import { styles } from './styles';

interface AlunoSolicitationList {
  solicitations: Solicitacao[] | undefined;
}

const AlunoSolicitationList = ({solicitations}: AlunoSolicitationList) => {

  const renderItem = ({ item }:any) => (
    <View style={styles.solicitationCard}> 
      <Text style={{fontSize: 18, fontWeight: '500'}}>Aluno: {item.nomeAluno}</Text>
      <Text style={{fontSize: 18}}>Horario desejado: {item.agendamento}</Text>
      <Text style={{fontSize: 18}}>Matrícula: {item.matriculaAluno}</Text>
    </View>
  );

  return (
    <View style={{width: '100%'}}>
      <FlatList
        keyExtractor={(item) => item.dataSolicitacao}
        style={{ marginTop: 60 }}
        data={solicitations}
        renderItem={renderItem}
      />
    </View>
  )
}
export default AlunoSolicitationList;