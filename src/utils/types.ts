export type Aluno = {
  matricula: string;
  nome: string;
  senha: string;
  email: string;
  telefone: string;
  ehMonitor: boolean;
  monitorias?: Monitoria[];
}
export type AlunoMonitor = {
  matricula: string;
  nome: string;
  monitorias: Monitoria[];
}

export type Monitoria = {
  codigoDisciplina: string,
  nomeDisciplina: string,
  professorDisciplina: string
  solicitacoes: Solicitacao[];
}

export type Solicitacao = {
  matriculaAluno: string;
  nomeAluno: string;
  dataSolicitacao: string;
  agendamento: string;
  finalizada: boolean;
}

export type Meeting = {
  nomeAluno: string;
  agendamento: string;
  disciplina: string;
  matriculaAluno: string;
}