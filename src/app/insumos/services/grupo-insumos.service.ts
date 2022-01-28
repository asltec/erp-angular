import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GrupoInsumos } from '../../grupoInsumos/models/grupo-insumos.model';

@Injectable({ providedIn: 'root' })
export class GrupoInsumosService {

    private API_URL = environment.API_URL;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient) { }

    public getGrupoInsumos(): Observable<GrupoInsumos[]> {
        return this.http.get<GrupoInsumos[]>(`${this.API_URL}/grupo-insumos`, this.httpOptions);
    }

}