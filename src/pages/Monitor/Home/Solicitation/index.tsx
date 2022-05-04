import { FlatList, Text, View } from "react-native"
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
const Solicitation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 24, color: '#f2f2f2', fontWeight: '600'}}>Pré requisitos</Text>
      <View style={styles.requirementsContainer}>
       <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam praesentium et voluptate voluptatibus omnis amet autem possimus sed delectus qui nihil reprehenderit maxime vero architecto eaque odio, vitae aspernatur itaque.</Text>
       <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam praesentium et voluptate voluptatibus omnis amet autem possimus sed delectus qui nihil reprehenderit maxime vero architecto eaque odio, vitae aspernatur itaque.</Text>
       <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam praesentium et voluptate voluptatibus omnis amet autem possimus sed delectus qui nihil reprehenderit maxime vero architecto eaque odio, vitae aspernatur itaque.</Text>
       <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam praesentium et voluptate voluptatibus omnis amet autem possimus sed delectus qui nihil reprehenderit maxime vero architecto eaque odio, vitae aspernatur itaque.</Text>
      </View>
      <Button onPress={() => console.log('hehe')} style={styles.updateButton} title="Confirmar solicitação" />
    </SafeAreaView>
  )
}

export default Solicitation;