import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserTraceAuthService {
  #baseUrl = 'http://localhost:3333/api';
  token = '';

  constructor(private http: HttpClient) {}

  public signIn(user: { username: string; password: string }) {
    return this.http.post(`${this.#baseUrl}/auth/login`, user).pipe(
      tap((res: any) => {
        this.token = res.access_token;
      })
    );
  }

  public getProfile() {
    return this.http.get(`${this.#baseUrl}/profile`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }
}
