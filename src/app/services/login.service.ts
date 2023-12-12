import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthenticated: boolean = false;

  constructor() {
    // Recuperar el estado de autenticación al iniciar el servicio
    this.isAuthenticated = this.retrieveAuthenticationState();
  }

  private retrieveAuthenticationState(): boolean {
    // Intentar recuperar el estado de autenticación desde LocalStorage
    const storedState = localStorage.getItem('isAuthenticated');
    return storedState ? JSON.parse(storedState) : false;
  }

  private updateAuthenticationState(state: boolean): void {
    // Actualizar el estado de autenticación en LocalStorage
    localStorage.setItem('isAuthenticated', JSON.stringify(state));
  }

  login() {
    this.isAuthenticated = true;
    this.updateAuthenticationState(true);
  }

  logout() {
    this.isAuthenticated = false;
    this.updateAuthenticationState(false);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
