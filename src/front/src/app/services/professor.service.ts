import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { ProfessorDto } from '../dto/professor.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class professorService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createProfessor(professor: ProfessorDto): Observable<ProfessorDto>{
    return this.http.post<ProfessorDto>(`${this.BASE_URL}/professor/create`, professor)
  }

  getProfessors(): Observable<ProfessorDto[]> { 
    return this.http.get<ProfessorDto[]>(`${this.BASE_URL}/professor`)
  }

  getProfessor(id: string): Observable<ProfessorDto>{
    return this.http.get<ProfessorDto>(`${this.BASE_URL}/professor/${id}`)
  }

  updateProfessor(id: string, professor: ProfessorDto): Observable<ProfessorDto>{
    return this.http.put<ProfessorDto>(`${this.BASE_URL}/professor/edit/${id}`, professor)
  }

  deleteProfessor(id: string): Observable<ProfessorDto>{
    return this.http.delete<ProfessorDto>(`${this.BASE_URL}/professor/delete/${id}`)
  }


}
