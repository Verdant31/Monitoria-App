import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../../contexts/AuthContext';
import LabelInfo from '../../../components/Monitor/Perfil/LabelInfo';
import { Button } from 'react-native-elements';

const Perfil = () => {
  const { aluno, signOut} = useAuth();
  if(!aluno) {
    return (
      <View>
        <Text>Loading user...</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons style={{marginTop: 50, alignSelf: 'center'}} name="person" size={90} color="white" />
      <Text style={styles.title}>Dados pessoais</Text>
      <View style={styles.userContainer}>
        <LabelInfo label="Nome" value={aluno?.nome}/>
        <LabelInfo label="Email" value={aluno?.email}/>
        <LabelInfo label="Matrícula" value={aluno?.matricula}/>
        <LabelInfo label="Telefone" value={aluno?.telefone}/>
        {aluno.ehMonitor
          ? <LabelInfo label="Monitor" value='Sim'/>
          : <LabelInfo label="Monitor" value='Não'/>
        }
      </View>
      <View style={{marginTop: 40}}>
        <Button onPress={() => console.log('hehe')} style={styles.updateButton} title="Editar perfil" />
        <Button onPress={() => signOut()} style={styles.updateButton} title="Encerrar sessão" />
      </View>
    </SafeAreaView>
  )
}

export default Perfil