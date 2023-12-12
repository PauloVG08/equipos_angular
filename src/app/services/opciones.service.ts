import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpcionesService {
  private apiUrl = 'https://65611e9fdcd355c08323a3aa.mockapi.io/api/venta/opcion';

  constructor(private http: HttpClient) { }

  getOpciones(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
