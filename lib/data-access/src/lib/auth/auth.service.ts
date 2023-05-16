import { Observable } from 'rxjs';
import { AuthResponse, Login } from './auth.model';
import { Inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _jwtHelper = new JwtHelperService();
  private apiUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('appStorage')
    private appStorage: string /* pega o appStorage lançado no app.module da aplicação */
  ) {
    this.apiUrl = environment.API_URL;
  }

  public authenticate(data: Login): Observable<AuthResponse> {
    const setToken = (response: AuthResponse) =>
      this.setToken(response.accessToken);
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/auth`, data)
      .pipe(tap(setToken));
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token && this.tokenIsValid(token);
  }

  public setToken(token: string) {
    localStorage.setItem(`${this.appStorage}.token`, token);
  }

  public logout(){
    localStorage.removeItem(`${this.appStorage}.token`);
  }

  public getToken() {
    return localStorage.getItem(`${this.appStorage}.token`);
  }

  private tokenIsValid(token: string): boolean {
    const expiryTime = this._jwtHelper.getTokenExpirationDate(token);
    const now = new Date().getTime();
    return (expiryTime as Date).getTime() - now > 0;
  }
}
