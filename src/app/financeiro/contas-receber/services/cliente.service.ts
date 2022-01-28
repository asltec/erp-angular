import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Clientes } from '../../../clientes/models/clientes.model';

@Injectable({ providedIn: 'root' })
export class ClientesService {

    private API_URL = environment.API_URL;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient) { }

    public getClientes(): Observable<Clientes[]> {
        return this.http.get<Clientes[]>(`${this.API_URL}/clientes`, this.httpOptions);
    }
}