import { Component, EventEmitter, Output } from '@angular/core';
import { Equipo } from '../models/equipo.model';

@Component({
    selector: 'app-modal-registrar',
    templateUrl: './modal-registrar.component.html',
    styleUrls: ['./modal-registrar.component.css']
})
export class ModalRegistrarComponent {
    @Output() cerrarModal = new EventEmitter<void>();
    constructor() { }

    equipo: Equipo = {
        id: 0,
        nombre: '',
        anio_fundacion: '',
        description: '',
        posicion_tabla: 0,
    };

    emitirCerrarModal(): void {
        this.cerrarModal.emit();
    }
}
