import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../../contexts/AuthContext';
import LabelInfo from '../../../components/Monitor/Perfil/LabelInfo';
import { Button } from 'react-native-elements';
import { api } from '../../../services/axios';

type PerfilAluno = {
  nome_aluno: string;
  email: string;
  matricula: string;
  e_monitor: boolean;
}

const Perfil = () => {
  const [ perfil, setPerfil ] = useState<PerfilAluno>();
  const { signOut, aluno } = useAuth();
  useEffect(() => {
    const fecthPerfil = async () => {
      await api.post('/aluno/perfil', {matricula: aluno.matricula}).then(res => {
        setPerfil(res.data);
      })
    }
    fecthPerfil();
  },[])

  if(!perfil) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Carregando...</Text>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons style={{marginTop: 50, alignSelf: 'center'}} name="person" size={70} color="white" />
      <Text style={styles.title}>Dados pessoais</Text>
      <View style={styles.userContainer}>
        <LabelInfo label="Nome" value={perfil.nome_aluno}/>
        <LabelInfo label="Email" value={perfil.email}/>
        <LabelInfo label="Matrícula" value={perfil.matricula}/>
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