import { Component, OnInit } from '@angular/core';
import { Equipo } from '../models/equipo.model';
import { EquipoService } from '../services/equipo.service';
import { Router } from '@angular/router';
import { ModalRegistrarComponent } from '../modal-registrar/modal-registrar.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  equipos: Equipo[] = [];
  mostrarModal: boolean = false;

  constructor(private equipoService: EquipoService, private router: Router) { }

  ngOnInit(): void {
    this.equipoService.getEquipos().subscribe(data => {
      this.equipos = data;
    });
  }

  verDetalles(id: number): void {
    this.router.navigate(['/detalle', id]);
  }

  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }

}
