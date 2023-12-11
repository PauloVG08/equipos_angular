import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipo } from '../models/equipo.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  // private url = 'assets/equipos.json'; ESTE SE USA PARA OBTENER DATOS LOCALES
  private apiUrl = 'https://65611e9fdcd355c08323a3aa.mockapi.io/api/venta/detalleVenta';

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(this.apiUrl);
  }

  getEquipoById(equipoid: number): Observable<Equipo | undefined> {
    return this.getEquipos().pipe(
      map(equipos => equipos.find(equipo => equipo.id === equipoid))
    );
  }

  insertarEquipo(nuevoEquipo: Equipo): void {
    try {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      this.http.post<Equipo>(this.apiUrl, nuevoEquipo, { headers });
      alert("Equipo ingresado.")
    } catch (error) {
      alert("Hubo un error: " + error);
    }
  }
}
