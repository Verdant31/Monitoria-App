import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { Solicitacao } from "../../../../utils/types";
import { styles } from './styles';

interface AlunoSolicitationList {
  solicitations: Solicitacao[] | undefined;
}

const SolicitacoesDosAlunosLista = ({solicitations}: AlunoSolicitationList) => {
  //TODO - Pegar as solicitações da monitoria escolhida
  const renderItem = ({ item }:any) => (
    <View style={item.finalizada === true ? styles(100).solicitationCard : styles(140).solicitationCard}> 
      <Text style={{fontSize: 18, fontWeight: '500'}}>Aluno: {item.nomeAluno}</Text>
      <Text style={{fontSize: 18}}>Horario desejado: {item.agendamento}</Text>
      <Text style={{fontSize: 18}}>Matrícula: {item.matriculaAluno}</Text>
      {!item.finalizada && 
        (
          <View style={styles().buttonsContainer}>
            <TouchableOpacity style={{ width: '45%' }}>
              <Button onPress={()=> console.log('hehe')} title="Finalizar" />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '45%' }}>
              <Button onPress={()=> console.log('hehe')} title="Excluir" />
            </TouchableOpacity>
          </View>
        )}
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
export default SolicitacoesDosAlunosLista;