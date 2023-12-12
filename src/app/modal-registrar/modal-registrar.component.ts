import { Component, EventEmitter, Output } from '@angular/core';
import { Equipo } from '../models/equipo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EquipoService } from '../services/equipo.service';
import { EquipoUpdateService } from '../services/equipo-update.service';

@Component({
    selector: 'app-modal-registrar',
    templateUrl: './modal-registrar.component.html',
    styleUrls: ['./modal-registrar.component.css']
})
export class ModalRegistrarComponent {
    @Output() cerrarModal = new EventEmitter<void>();
    constructor(private equipoService: EquipoService,
        private httpClient: HttpClient,
        private equipoUpdateService: EquipoUpdateService) { }

    equipo: Equipo = {
        nombre: '',
        anio_fundacion: '',
        description: '',
        posicion_tabla: 0,
        id: 0,
    };

    emitirCerrarModal(): void {
        this.cerrarModal.emit();
    }

    registrarEquipo(equipo: Equipo): void {
        console.log(equipo);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        const encabezados = { headers: headers };

        this.httpClient.post<any>('https://65611e9fdcd355c08323a3aa.mockapi.io/api/venta/detalleVenta', equipo, encabezados).subscribe(
            (response) => {
                alert("Equipo registrado");
                console.log('Equipo registrado exitosamente:', response);
                this.equipoUpdateService.actualizarEquipos();
                this.emitirCerrarModal();
            },
            (error) => {
                alert("Error al insertar.");
                console.error('Error al registrar el equipo:', error);
            }
        );
    }
}
