import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AlunoDTO } from '../interfaces/Aluno.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getAlunos(): Observable<AlunoDTO[]> {
    return this.httpClient.get<AlunoDTO[]>(`${this.BASE_URL}/aluno`) 
  }

  getAluno(id: string): Observable<AlunoDTO> {
    return this.httpClient.get<AlunoDTO>(`${this.BASE_URL}/aluno${id}`) 
  }

  createAluno(aluno: AlunoDTO): Observable<AlunoDTO> {
    return this.httpClient.post<AlunoDTO>(`${this.BASE_URL}/aluno/create`, aluno);
  }

  updateAluno(id: string, aluno: AlunoDTO): Observable<AlunoDTO> {
    return this.httpClient.put<AlunoDTO>(`${this.BASE_URL}/aluno/edit/${id}`, aluno)
  }

  deleteAluno(id: string): Observable<AlunoDTO> {
    return this.httpClient.delete<AlunoDTO>(`${this.BASE_URL}/aluno/delete/${id}`)
  }

}
