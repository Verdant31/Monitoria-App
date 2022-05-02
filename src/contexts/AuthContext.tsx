import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import data from '../../fakeData.json';
import { Aluno } from '../utils/types';
//React navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../pages/RootStackParams';
import { useNavigation } from '@react-navigation/native';

type AuthContextType = {
  aluno: Aluno | undefined;
  signIn: (matricula: string, senha: string) => void; 
}

type AuthContextProviderPros = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

type AuthContextProps = NativeStackNavigationProp<RootStackParamList, 'AuthContext'>;

const AuthContextProvider = (props: AuthContextProviderPros) => {
  const [ aluno, setAluno ] = useState<Aluno>();
  const navigation = useNavigation<AuthContextProps>();
  
  const verifyStudent = (matricula: string, senha: string) =>  {
    data.map((aluno) => {
      if(matricula === aluno.matricula && senha === aluno.senha) {
        setAluno(aluno);
      }
    })
    return aluno;
  }

  const signIn = (matricula: string, senha: string) => {
    data.map((aluno) => {
      if(matricula === aluno.matricula && senha === aluno.senha) {
        aluno.ehMonitor === true
          ? navigation.navigate('Monitor')
          : navigation.navigate('Aluno')
      }
    })
  }

  return (
    <AuthContext.Provider value={{signIn, aluno}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;

export const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
}


