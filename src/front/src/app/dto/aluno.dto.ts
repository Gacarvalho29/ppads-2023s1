export interface AlunoDto {
  matricula?: number;
  cod_aluno?: string;
  cod_turma?: number | undefined;
  cod_resp?: number | undefined;
  nome_aluno: string;
  data_nasc: string;
}