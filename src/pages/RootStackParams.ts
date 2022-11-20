import { Aluno } from "../utils/types"

export type RootStackParamList = {
  Login: undefined;
  AuthContext: { aluno: Aluno }
  Monitor: undefined;
  Aluno: undefined;
  Solicitacao: { vaga: string };
  Monitoria: {id_monitoria: string, id_monitor: string};
  CreateSolicitation: undefined;
  MonitoriaDetails: { codigo_monitoria: string}
  AgendarHorario: {id_monitoria: string,  monitor: string, disciplina: string, dia: string};
  Candidaturas: undefined;
}