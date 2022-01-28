import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Insumos } from '../models/insumos.model';

@Injectable({ providedIn: 'root' })
export class InsumosApi {

    private API_URL = environment.API_URL;

    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    public getAllInsumos() {
        return this.http.get<Insumos[]>(`${this.API_URL}/insumos`).toPromise();
    }

    public getById(idInsumo: number) {
        return this.http.get(`${this.API_URL}/insumos/${idInsumo}`).toPromise();
    }

    // public salvarInsumo(insumo: Insumos) {
    //     return this.http.post(`${this.API_URL}/insumos`, insumo).toPromise()
    // }

    public salvarInsumo(insumo: Insumos) {
        return this.http.post(`${this.API_URL}/insumos`, insumo).toPromise();
    }

    public atualizarInsumo(idInsumo: number, insumo: Insumos) {
        return this.http.put(`${this.API_URL}/insumos/${idInsumo}`, insumo).toPromise();
    }

    public deletarInsumo(idInsumo: number) {
        return this.http.delete(`${this.API_URL}/insumos/${idInsumo}`).toPromise();
    }

    errorMgmt(error: HttpErrorResponse) {
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