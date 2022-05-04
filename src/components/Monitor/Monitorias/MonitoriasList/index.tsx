import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native"
import { useAuth } from "../../../../contexts/AuthContext";
import { Monitoria } from "../../../../utils/types";
import { styles } from './styles';
const MonitoriasList = () => {
  const [ monitorias, setMonitorias ] = useState<Monitoria[]>();
  const { aluno } = useAuth();

  useEffect(() => {
    if(aluno?.monitorias) {
      setMonitorias(aluno.monitorias)
    }
  },[])

  const renderItem = ({ item }:any) => (
    <View style={styles.monitoriaCard}>
      <Text style={{fontSize: 18, fontWeight: '500'}}>{item.nomeDisciplina}</Text>
      <Text style={{fontSize: 18}}>{item.professorDisciplina}</Text>
      <Text style={{fontSize: 18}}>Código: {item.codigoDisciplina}</Text>
    </View>
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
