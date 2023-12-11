import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasenia: string = '';
  mostrar: boolean = false;

  constructor(private loginS: LoginService, private router: Router) { }

  validarFormulario() {
    if (this.usuario.trim() == "" || this.contrasenia.trim() == "") {
      alert("Por favor completa ambos campos");
    } else {
      this.router.navigate(['/inicio'])
      this.login();
    }
  }

  mostrarContrasenia() {
    this.mostrar = !this.mostrar;
  }

  login() {
    this.loginS.login();
    this.router.navigate(['/inicio']);
  }
}
