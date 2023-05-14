import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { DisciplinaDto } from '../dto/disciplina.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  BASE_URL: string = 'ppads-2023s1-production-ad71.up.railway.app';
  // BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createDisciplina(disciplina: DisciplinaDto): Observable<DisciplinaDto>{
    return this.http.post<DisciplinaDto>(`${this.BASE_URL}/disciplina/create`, disciplina)
  }

  getDisciplinas(): Observable<DisciplinaDto[]> { 
    return this.http.get<DisciplinaDto[]>(`${this.BASE_URL}/disciplina`)
  }

  getDisciplina(id: string): Observable<DisciplinaDto>{
    return this.http.get<DisciplinaDto>(`${this.BASE_URL}/disciplina/${id}`)
  }

  updateDisciplina(id: string, disciplina: DisciplinaDto): Observable<DisciplinaDto>{
    return this.http.put<DisciplinaDto>(`${this.BASE_URL}/disciplina/edit/${id}`, disciplina)
  }

  deleteDisciplina(id: string): Observable<DisciplinaDto>{
    return this.http.delete<DisciplinaDto>(`${this.BASE_URL}/disciplina/delete/${id}`)
  }


}
