export interface ProfessorDto {
  nome_prof:      string;     
  cod_prof?:      number;      
  cod_disciplina: number[] | undefined;    
  id?:            string;     
  email_prof?:     string;
  tel_prof:       string;
}