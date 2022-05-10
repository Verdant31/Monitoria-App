import { Aluno } from "../utils/types"

export type RootStackParamList = {
  Login: undefined;
  AuthContext: { aluno: Aluno }
  Monitor: undefined;
  Aluno: undefined;
  Solicitation: undefined;
  Monitoria: undefined;
  CreateSolicitation: undefined;
  MonitoriaDetails: { codigoDisciplina: string}
  AgendarHorario: undefined;
}