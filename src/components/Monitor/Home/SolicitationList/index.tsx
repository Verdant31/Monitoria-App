import { View, Text, FlatList, StyleSheet } from 'react-native';
import data from '../../../../../solicitacoes.json';
import { styles } from './styles';

const SolicitationList = () => {
  const renderItem = ({ item }:any) => (
    <View style={styles.solicitationCard} key={item.codigo}>
      <Text style={{fontSize: 18, fontWeight: '500'}}>{item.disciplina}</Text>
      <Text style={{fontSize: 18}}>{item.professor}</Text>
      <Text style={{fontSize: 18}}>Código: {item.codigo}</Text>
    </View>
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        style={{ marginTop: 60 }}
        data={data}
        renderItem={renderItem}
      />
    </View>
  )
}
export default SolicitationList;