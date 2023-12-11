import { Component, OnInit } from '@angular/core';
import { Equipo } from '../models/equipo.model';
import { EquipoService } from '../services/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  equipos: Equipo[] = [];

  constructor(private equipoService: EquipoService, private router: Router) { }

  ngOnInit(): void {
    this.equipoService.getEquipos().subscribe(data => {
      this.equipos = data;
    });
  }

  verDetalles(id: number): void {
    this.router.navigate(['/detalle', id]);
  }

}
