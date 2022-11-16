import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { useAuth } from "../../../../contexts/AuthContext";
import { RootStackParamList } from "../../../../pages/RootStackParams";
import { api } from "../../../../services/axios";
import { styles } from './styles';

type MonitorProps = NativeStackNavigationProp<RootStackParamList, 'Monitor'>;
type Monitoria = {
  disciplina: {
    codigo_disciplina: string;
    colaborador: {
      nome: string
    }
    nome: string
  }
  id: string;
}


const MonitoriasList = () => {
  const [ monitorias, setMonitorias ] = useState<Monitoria[]>();
  const { aluno } = useAuth();
  const navigation = useNavigation<MonitorProps>();


  useEffect(() => {
    const fetchSolicitacoes = async () => {
      await api.get('/aluno/monitor/minhasmonitorias').then(res => {
        setMonitorias(res.data)
      }).catch(err => console.log(err))
    }
    fetchSolicitacoes();
  },[])

  const renderItem = ({ item }:any) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('MonitoriaDetails', {codigoDisciplina: item.disciplina.codigo_disciplina})}>
        <View style={styles.monitoriaCard}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>{item.disciplina.nome}</Text>
          <Text style={{fontSize: 18}}>{item.disciplina.colaborador.nome}</Text>
          <Text style={{fontSize: 18}}>Código: {item.disciplina.codigo_disciplina}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{width: '100%'}}>
      <FlatList
        keyExtractor={(item) => item.id}
        style={{ marginTop: 60 }}
        data={monitorias}
        renderItem={renderItem}
      />
    </View>
  )
}

export default MonitoriasList;
