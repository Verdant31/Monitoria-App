import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { api } from "../../../../services/axios";
import { styles } from './styles';

type Details = {
  horario : string;
  nome_aluno : string;
  matricula_aluno : string;
  status : string;
  id_agendamento: string;
}
interface AlunoSolicitationList {
  solicitations: Details[] | undefined;
  removeFromList: (id: string) => void;
}


const SolicitacoesDosAlunosLista = ({solicitations, removeFromList}: AlunoSolicitationList) => {
  async function reprovarSolicitacao(id: string) {
    await api.put('aluno/monitor/agendamento/cancelar', {
      id_agendamento: id,
    }).then(()=> {
      removeFromList(id);
    }).catch((err) => console.log(err))
  }

  async function aprovarSolicitacao(id: string) {
    await api.put('aluno/monitor/agendamento/aprovar', {
      id_agendamento: id,
    }).then(()=> {
      removeFromList(id);
    }).catch((err) => console.log(err))
  }

  const renderItem = ({ item }:any) => {
    return (
      <View style={item.status === 'Aprovado' ? styles(100).solicitationCard : styles(140).solicitationCard}> 
        <Text style={{fontSize: 18, fontWeight: '500'}}>Aluno: {item.nome_aluno}</Text>
        <Text style={{fontSize: 18}}>Horario desejado: {(item.horario).slice(11, -8)}</Text>
        <Text style={{fontSize: 18}}>Matrícula: {item.matricula_aluno}</Text>
        {item.status === 'Pendente' && 
          (
            <View style={styles().buttonsContainer}>
              <TouchableOpacity style={{ width: '45%' }}>
                <Button onPress={()=> aprovarSolicitacao(item.id_agendamento)} title="Aprovar" />
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '45%' }}>
                <Button onPress={()=> reprovarSolicitacao(item.id_agendamento)} title="Reprovar" />
              </TouchableOpacity>
            </View>
          )}
      </View>
    );
  }

  return (
    <View style={{width: '100%'}}>
      <FlatList
        keyExtractor={(item) => item.id_agendamento}
        style={{ marginTop: 60 }}
        data={solicitations}
        renderItem={renderItem}
      />
    </View>
  )
}
export default SolicitacoesDosAlunosLista;