import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const AUTH_TOKEN = 'authenticated';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authToken: string;

  authenticate(username: string, password: string): Observable<boolean> {
    if (username === 'admin' && password === '123456') {
      localStorage.setItem('token', AUTH_TOKEN);
      return of(true);
    } else {
      return of(false);
    }
  }

  logoff() {
    localStorage.removeItem('token');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return AUTH_TOKEN === token;
  }

  constructor() {
    this.authToken = 'validToken';
  }
}
