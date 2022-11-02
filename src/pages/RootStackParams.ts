import { Aluno } from "../utils/types"

export type RootStackParamList = {
  Login: undefined;
  AuthContext: { aluno: Aluno }
  Monitor: undefined;
  Aluno: undefined;
  Solicitation: { id_solicitacao: string };
  Monitoria: {id_monitoria: string, id_monitor: string};
  CreateSolicitation: undefined;
  MonitoriaDetails: { codigoDisciplina: string}
  AgendarHorario: undefined;
}