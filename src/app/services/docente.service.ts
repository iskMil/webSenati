import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Docente } from '../models/docente.model';

@Injectable({ providedIn: 'root' })
export class DocenteService {
  private apiUrl = 'http://localhost:5015/api/Docente';

  constructor(private http: HttpClient) {}

  registrarDocente(docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(this.apiUrl, docente);
  }
}
