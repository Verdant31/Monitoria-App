import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import data from '../../../../../alunos.json';
import { RootStackParamList } from "../../../../pages/RootStackParams";
import { api } from "../../../../services/axios";
import { styles } from './styles';

type AlunoProps = NativeStackNavigationProp<RootStackParamList, 'Aluno'>;

type Monitoria = {
  id: string;
  id_monitoria: string;
  id_monitor: string;
  nome_disciplina : string;
  nome_monitor : string
  codigo_disciplina : string
}

interface ListaMonitoresProps {
  filter: string;
}

const ListaMonitores = ({filter} : ListaMonitoresProps) => {
  const [ monitorias, setMonitorias ] = useState<Monitoria[]>([])
  const navigation = useNavigation<AlunoProps>();

  const filteredMonitorias = monitorias.filter(monitoria => monitoria.nome_disciplina.includes(filter));

  useEffect(() => {
    const fetchMonitorias = async () => {
      await api.get('/aluno/monitorias').then(res => {
        setMonitorias(res.data)
      }).catch(err => console.log(err))
    }
    fetchMonitorias();
  },[])

  const renderItem = ({item}:any) => {
    return (
        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Monitoria', {id_monitoria: item.id_monitoria, id_monitor: item.id_monitor})}>
          <View style={styles.monitoriaCard}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>{item.nome_disciplina}</Text>
            <Text style={{fontSize: 18}}>{item.nome_monitor}</Text>
            <Text style={{fontSize: 18}}>Código: {item.codigo_disciplina}</Text>
          </View>
        </TouchableOpacity>
    )
  }

  return (
    <View style={{width: '100%'}}>
      <FlatList
        keyExtractor={(monitoria) => monitoria.id}
        style={{ marginTop: 60 }}
        data={filteredMonitorias.length > 0 ? filteredMonitorias : monitorias}
        renderItem={renderItem}
      />
    </View>
  )
}
export default ListaMonitores;