import { Aluno } from "../utils/types"

export type RootStackParamList = {
  AuthContext: { aluno: Aluno }
  Monitor: undefined;
  Aluno: undefined;
  Solicitation: undefined;
  Monitoria: undefined;
}