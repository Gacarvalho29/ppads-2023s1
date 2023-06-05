import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PresencaDTO } from '../dto/presenca.dto';

@Injectable({
  providedIn: 'root'
})
export class PresencaService {

  BASE_URL: string = 'https://ppads-2023s1-production.up.railway.app';
  // BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getPresencas(): Observable<PresencaDTO[]> { 
    return this.http.get<PresencaDTO[]>(`${this.BASE_URL}/presenca`)
  }

  deletePresenca(id: string): Observable<PresencaDTO>{
    return this.http.delete<PresencaDTO>(`${this.BASE_URL}/presenca/delete/${id}`)
  }

}
