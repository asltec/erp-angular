import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Clientes } from '../models/clientes.model';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ClientesApi {

    private API_URL = environment.API_URL;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient) { }

    public getAllClientes(): Observable<Clientes[]> {
        return this.http.get<Clientes[]>(`${this.API_URL}/clientes`).pipe(
            catchError(this.errorHandler)
        );
    }

    public getById(idCliente: number) {
        return this.http.get(`${this.API_URL}/clientes/${idCliente}`).toPromise();
    }

    public salvarCliente(cliente: Clientes) {
        return this.http.post(`${this.API_URL}/clientes`, cliente).toPromise()
    }

    public atualizarCliente(idCliente: number, cliente: Clientes) {
        return this.http.put(`${this.API_URL}/clientes/${idCliente}`, cliente).toPromise();
    }

    public deletarCliente(idCliente: number) {
        return this.http.delete(`${this.API_URL}/clientes/${idCliente}`).toPromise();
    }

    errorHandler(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

}