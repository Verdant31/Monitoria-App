import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import data from '../../alunos.json';
import { Aluno } from '../utils/types';
//React navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../pages/RootStackParams';
import { useNavigation } from '@react-navigation/native';

type AuthContextType = {
  aluno: Aluno | undefined;
  signIn: (matricula: string, senha: string) => void; 
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

  const signIn = (matricula: string, senha: string) => {
    data.map((aluno) => {
      if(matricula === aluno.matricula && senha === aluno.senha) {
        setAluno(aluno)
        aluno.ehMonitor === true
          ? navigation.navigate('Monitor')
          : navigation.navigate('Aluno')
      }
    })
  }

  const signOut = () => {
    setAluno(undefined)
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


