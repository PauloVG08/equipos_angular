import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EquipoUpdateService {
  equipoActualizado: EventEmitter<void> = new EventEmitter<void>();

  actualizarEquipos(): void {
    this.equipoActualizado.emit();
  }
}
