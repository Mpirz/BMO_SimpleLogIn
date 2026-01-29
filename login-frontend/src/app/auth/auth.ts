import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:8080/api/auth/login';

  private loggedIn = sessionStorage.getItem('loggedIn') === 'true';

    constructor(private http: HttpClient) {}

    login(req: LoginRequest): Observable<LoginResponse> {
      return this.http.post<LoginResponse>(this.apiUrl, req).pipe(
        tap(() => {
          this.loggedIn = true;
          sessionStorage.setItem('loggedIn', 'true');
        })
      );
    }

    logout(): void {
      this.loggedIn = false;
      sessionStorage.removeItem('loggedIn');
    }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
