import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../../pages/RootStackParams';
import { api } from '../../../../services/axios';
import { styles } from './styles';

type MonitorProps = NativeStackNavigationProp<RootStackParamList, 'Monitor'>;

type Solicitacao = {
  id: string;
  codigo_disciplina: string;
  nome_disciplina: string;
  nome_professor: string;
  pre_requisito: string;
}

interface ListaDeSolicitacoesProps {
  filter: string;
}

const ListaDeSolicitacoes = ({filter} : ListaDeSolicitacoesProps) => {
  //TODO - Mudar a chave do map
  const [ solicitacoes, setSolicitacoes ] = useState<Solicitacao[]>([]);
  const navigation = useNavigation<MonitorProps>();

  const filteredSolicitacoes = solicitacoes.filter(solicitacao => solicitacao.nome_disciplina.includes(filter));

  useEffect(() => {
    const fetchSolicitacoes = async () => {
      await api.get('/aluno/vagasmonitoria').then(res => {
        setSolicitacoes(res.data.vagas_monitorias)
      }).catch(err => console.log(err))
    }
    fetchSolicitacoes();
  },[])

  const renderItem = ({ item }:any) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Solicitation', { id_solicitacao: item.id})}>
        <View style={styles.solicitationCard} key={item.id}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>{item.nome_disciplina}</Text>
          <Text style={{fontSize: 18}}>{item.nome_professor}</Text>
          <Text style={{fontSize: 18}}>Código: {item.codigo_disciplina}</Text>
        </View>
      </TouchableOpacity>
    )
  };

  return (
    <View style={styles.listContainer}>
        <FlatList
          style={{ marginTop: 60 }}
          data={filteredSolicitacoes.length > 0 ? filteredSolicitacoes : solicitacoes}
          renderItem={renderItem}
        />
      
    </View>
  )
}
export default ListaDeSolicitacoes;