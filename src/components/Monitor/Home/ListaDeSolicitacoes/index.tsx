import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import data from '../../../../../solicitacoes.json';
import { RootStackParamList } from '../../../../pages/RootStackParams';
import { styles } from './styles';

type MonitorProps = NativeStackNavigationProp<RootStackParamList, 'Monitor'>;


const ListaDeSolicitacoes = () => {
  const navigation = useNavigation<MonitorProps>();

  const renderItem = ({ item }:any) => (
    <TouchableOpacity onPress={() => navigation.navigate('Solicitation')}>
      <View style={styles.solicitationCard} key={item.codigo}>
        <Text style={{fontSize: 18, fontWeight: '500'}}>{item.disciplina}</Text>
        <Text style={{fontSize: 18}}>{item.professor}</Text>
        <Text style={{fontSize: 18}}>Código: {item.codigo}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item) => item.codigo}
          style={{ marginTop: 60 }}
          data={data}
          renderItem={renderItem}
        />
      
    </View>
  )
}
export default ListaDeSolicitacoes;