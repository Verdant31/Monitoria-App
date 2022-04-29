import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import data from '../../fakeData.json';
import { Aluno } from '../utils/types';

type AuthContextType = {
  aluno: Aluno | undefined;
  signIn: (matricula: string, senha: string) => boolean | undefined; 
}

type AuthContextProviderPros = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

const AuthContextProvider = (props: AuthContextProviderPros) => {
  const [ aluno, setAluno ] = useState<Aluno>();
  
  const verifyStudent = (matricula: string, senha: string) =>  {
    data.map((aluno) => {
      if(matricula === aluno.matricula && senha === senha) {
        setAluno(aluno);
      }
    })
    return aluno;
  }

  const signIn = (matricula: string, senha: string) => {
    //verifyStudent vai verificar se as credentiais estão
    //corretas, se estiverem, retorna os dados do aluno
    const alunoVerificado = verifyStudent(matricula, senha)
    if(alunoVerificado) {
      if(alunoVerificado.ehMonitor === true) return true;
      if(alunoVerificado.ehMonitor === false) return false;
    }else {
      throw Error;
    }
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


