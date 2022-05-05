import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import data from '../../../../../monitores.json';
import { RootStackParamList } from "../../../../pages/RootStackParams";
import { styles } from './styles';

type AlunoProps = NativeStackNavigationProp<RootStackParamList, 'Aluno'>;


const MonitorsList = () => {
  const navigation = useNavigation<AlunoProps>();

  const renderItem = ({ item }:any) => {
    if(item.ehMonitor === true) {
      return item.monitorias.map((monitoria:any)=> {
        return (
        <TouchableOpacity onPress={() => navigation.navigate('Monitoria')}>
          <View style={styles.monitoriaCard}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>{monitoria.nomeDisciplina}</Text>
            <Text style={{fontSize: 18}}>{item.nome}</Text>
            <Text style={{fontSize: 18}}>Código: {monitoria.codigoDisciplina}</Text>
          </View>
        </TouchableOpacity>
        )
      })
    }    
  }

  return (
    <View style={{width: '100%'}}>
      <FlatList
        keyExtractor={(item) => item.matricula}
        style={{ marginTop: 60 }}
        data={data}
        renderItem={renderItem}
      />
    </View>
  )
}
export default MonitorsList;