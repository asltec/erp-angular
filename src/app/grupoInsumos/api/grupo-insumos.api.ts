import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { GrupoInsumos } from '../models/grupo-insumos.model';

@Injectable({ providedIn: 'root' })
export class GrupoInsumosApi {

    private API_URL = environment.API_URL;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient) { }

    public getAllGrupoInsumos(): Observable<GrupoInsumos[]> {
        return this.http.get<GrupoInsumos[]>(`${this.API_URL}/grupo-insumos`).pipe(
            catchError(this.errorHandler)
        );
    }

    public getById(idGrupoInsumo: number) {
        return this.http.get(`${this.API_URL}/grupo-insumos/${idGrupoInsumo}`, this.httpOptions).toPromise();
    }

    public salvarGrupoInsumo(grupoInsumo: GrupoInsumos): Observable<GrupoInsumos> {
        return this.http.post<GrupoInsumos>(`${this.API_URL}/grupo-insumos`, grupoInsumo, this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    public atualizarGrupoInsumo(idGrupoInsumo: number, grupoInsumo: GrupoInsumos) {
        return this.http.put<GrupoInsumos>(`${this.API_URL}/grupo-insumos/${idGrupoInsumo}`, grupoInsumo, this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    public deletarGrupoInsumo(idGrupoInsumo: number) {
        return this.http.delete(`${this.API_URL}/grupo-insumos/${idGrupoInsumo}`).toPromise();
    }


    private errorHandler(error: HttpErrorResponse) {
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


