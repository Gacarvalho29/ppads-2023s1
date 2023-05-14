import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurmaDisciplinaService {

  // BASE_URL: string = 'https://ppads-2023s1-production.up.railway.app';
  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTurmas() {
    return this.http.get(`${this.BASE_URL}/turma`);
  }

  getDisciplinas() {
    return this.http.get(`${this.BASE_URL}/disciplina`);
  }
}
