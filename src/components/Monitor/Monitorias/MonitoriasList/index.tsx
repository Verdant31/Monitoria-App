import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { useAuth } from "../../../../contexts/AuthContext";
import { RootStackParamList } from "../../../../pages/RootStackParams";
import { Monitoria } from "../../../../utils/types";
import { styles } from './styles';

type MonitorProps = NativeStackNavigationProp<RootStackParamList, 'Monitor'>;

const MonitoriasList = () => {
  const [ monitorias, setMonitorias ] = useState<Monitoria[]>();
  const { aluno } = useAuth();
  const navigation = useNavigation<MonitorProps>()

  useEffect(() => {
    if(aluno?.monitorias) {
      setMonitorias(aluno.monitorias)
    }
  },[])

  const renderItem = ({ item }:any) => (
    <TouchableOpacity onPress={() => navigation.navigate('MonitoriaDetails', {codigoDisciplina: item.codigoDisciplina})}>
      <View style={styles.monitoriaCard}>
        <Text style={{fontSize: 18, fontWeight: '500'}}>{item.nomeDisciplina}</Text>
        <Text style={{fontSize: 18}}>{item.professorDisciplina}</Text>
        <Text style={{fontSize: 18}}>Código: {item.codigoDisciplina}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{width: '100%'}}>
      <FlatList
        keyExtractor={(item) => item.codigoDisciplina}
        style={{ marginTop: 60 }}
        data={monitorias}
        renderItem={renderItem}
      />
    </View>
  )
}

export default MonitoriasList;
