import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username = 'usuario';
  private password = 'senha';

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === this.username && password === this.password) {
      localStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('username') !== null;
  }

  logout(): void {
    localStorage.removeItem('username');
  }

}
