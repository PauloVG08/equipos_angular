import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public loginS: LoginService, private router: Router) { }

  cerrarSesion(): void {
    this.loginS.logout();
    this.router.navigate(['/']);
  }
}
