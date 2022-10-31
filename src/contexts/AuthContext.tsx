import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import data from '../../alunos.json';
import { Aluno } from '../utils/types';
//React navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../pages/RootStackParams';
import { useNavigation } from '@react-navigation/native';
import { api } from '../services/axios';
import * as SecureStore from 'expo-secure-store';


type AuthContextType = {
  aluno: Aluno | undefined;
  signIn: (matricula: string, senha: string) => Promise<{isMonitor: boolean, rightCredentials: boolean }>; 
  signOut: () => void;
}

type AuthContextProviderPros = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

type AuthContextProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const AuthContextProvider = (props: AuthContextProviderPros) => {
  const [ aluno, setAluno ] = useState<Aluno | undefined>();
  const navigation = useNavigation<AuthContextProps>();

  const signIn = async (matricula: string, senha: string) => {
    let isMonitor = false;
    let rightCredentials = false;
    await api.post('auth/login/aluno', {
      matricula,
      senha,
    }).then(async res => {
      setAluno({
        nome: res.data.nome,
        matricula, 
        ehMonitor: res.data.role === "aluno" ? false : true,
      })
      await SecureStore.setItemAsync('token', res.data.token);
      api.defaults.headers.common.Authorization = `${res.data.token}`;
      rightCredentials = true;
      isMonitor = res.data.role === "aluno" ? false : true;
    }).catch(err => {
      console.log(err)
    })
    return {isMonitor: isMonitor, rightCredentials: rightCredentials};
  }

  const signOut = () => {
    navigation.navigate('Login')
  }

  return (
    <AuthContext.Provider value={{signIn, aluno, signOut}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;

export const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
}


