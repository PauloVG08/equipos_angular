import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { OpcionesService } from '../services/opciones.service';
import { Opcion } from '../models/opciones.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  opciones: Opcion[] = [];

  constructor(public loginS: LoginService, private router: Router, private opSer: OpcionesService) { }

  ngOnInit(): void {
    this.opSer.getOpciones().subscribe(data => {
      this.opciones = data;
    })
  }

  cerrarSesion(): void {
    this.loginS.logout();
    this.router.navigate(['/']);
  }
}
