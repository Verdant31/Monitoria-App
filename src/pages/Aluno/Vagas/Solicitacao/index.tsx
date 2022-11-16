import { useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native"
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from "../../../../services/axios";
import { RootStackParamList } from "../../../RootStackParams";
import { styles } from "./styles";

type AlunoProps = NativeStackNavigationProp<RootStackParamList, 'Solicitation'>;


const Solicitacao = () => {
  //TODO Fazer a logica de quebrar a string em varias
  const [ preRequisito, setPreRequisito ] = useState('')
  const { params } = useRoute();

  useEffect(() => {
    const fetchPreRequisito = async () => {
      await api.post('/aluno/monitor/prerequisitos', { params }).then((res) => {
        setPreRequisito(res.data.pre_requisito)
      })
    }
    fetchPreRequisito();
  }, [])
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

export default Solicitacao;