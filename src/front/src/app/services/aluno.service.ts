import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { AlunoDto } from '../dto/aluno.dto';
import { Observable } from 'rxjs';
import { PresencaDTO } from '../dto/presenca.dto';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  // BASE_URL: string = 'https://ppads-2023s1-production.up.railway.app';
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createAluno(aluno: AlunoDto): Observable<AlunoDto>{
    return this.http.post<AlunoDto>(`${this.BASE_URL}/aluno/create`, aluno)
  }

  getAlunos(): Observable<AlunoDto[]> { 
    return this.http.get<AlunoDto[]>(`${this.BASE_URL}/aluno`)
  }

  getAluno(id: string): Observable<AlunoDto>{
    return this.http.get<AlunoDto>(`${this.BASE_URL}/aluno/${id}`)
  }

  updateAluno(id: string, aluno: AlunoDto): Observable<AlunoDto>{
    return this.http.put<AlunoDto>(`${this.BASE_URL}/aluno/edit/${id}`, aluno)
  }

  deleteAluno(id: string | undefined): Observable<AlunoDto>{
    return this.http.delete<AlunoDto>(`${this.BASE_URL}/aluno/delete/${id}`)
  }

  addPresenca(cod_aluno: string | undefined): Observable<PresencaDTO> {
    return this.http.post<PresencaDTO>(`${this.BASE_URL}/aluno/presenca/${cod_aluno}`, cod_aluno);
  }
  
  addFalta(cod_aluno: string | undefined): Observable<PresencaDTO> {
    return this.http.post<PresencaDTO>(`${this.BASE_URL}/aluno/falta/${cod_aluno}`, cod_aluno);
  }  

}
