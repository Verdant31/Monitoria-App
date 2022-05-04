export type Aluno = {
  matricula: string;
  nome: string;
  senha: string;
  email: string;
  telefone: string;
  ehMonitor: boolean;
  monitorias?: Monitoria[];
}

export type Monitoria = {
  codigoDisciplina: string,
  nomeDisciplina: string,
  professorDisciplina: string
}
