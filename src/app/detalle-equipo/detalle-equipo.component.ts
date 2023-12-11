import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from '../models/equipo.model';
import { EquipoService } from '../services/equipo.service';

@Component({
  selector: 'app-detalle-equipo',
  templateUrl: './detalle-equipo.component.html',
  styleUrls: ['./detalle-equipo.component.css']
})

export class DetalleEquipoComponent implements OnInit {
  equipoId!: number;
  equipo: Equipo | undefined;

  constructor(private route: ActivatedRoute, private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.equipoId = +params['id'];

      this.equipoService.getEquipoById(this.equipoId).subscribe(
        (equipoEncontrado) => {
          if (equipoEncontrado) {
            this.equipo = equipoEncontrado;
          } else {
            alert(`No se encontró un equipo con el ID ${this.equipoId}`);
          }
        },
        (error) => {
          console.error('Error al obtener el equipo:', error);
        }
      );
    });
  }
}
