import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { TurmaDTO } from '../dto/turma.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  BASE_URL: string = 'https://ppads-2023s1-production.up.railway.app';

  constructor(private http: HttpClient) { }

  createTurma(turma: TurmaDTO): Observable<TurmaDTO>{
    return this.http.post<TurmaDTO>(`${this.BASE_URL}/turma/create`, turma)
  }

  getTurmas(): Observable<TurmaDTO[]> { 
    return this.http.get<TurmaDTO[]>(`${this.BASE_URL}/turma`)
  }

  getTurma(id: string): Observable<TurmaDTO>{
    return this.http.get<TurmaDTO>(`${this.BASE_URL}/turma/${id}`)
  }

  updateTurma(id: string, turma: TurmaDTO): Observable<TurmaDTO>{
    return this.http.put<TurmaDTO>(`${this.BASE_URL}/turma/edit/${id}`, turma)
  }

  deleteTurma(id: string): Observable<TurmaDTO>{
    return this.http.delete<TurmaDTO>(`${this.BASE_URL}/turma/delete/${id}`)
  }


}

