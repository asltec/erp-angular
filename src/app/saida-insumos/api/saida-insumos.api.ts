import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { SaidaInsumos } from '../models/saida-insumos.model';

@Injectable({ providedIn: 'root' })
export class SaidaInsumosApi {

    private API_URL = environment.API_URL;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient){}

    public getAllSaidaInsumos(): Observable<SaidaInsumos[]> {
        return this.http.get<SaidaInsumos[]>(`${this.API_URL}/saida-insumos`).pipe(
            catchError(this.errorHandler)
        );
    }
    
    public getById(idSaidaInsumo: number) {
        return this.http.get(`${this.API_URL}/saida-insumos/${idSaidaInsumo}`, this.httpOptions).toPromise();
    }

    public salvarSaidaInsumo(saidaInsumo: SaidaInsumos): Observable<SaidaInsumos> {
        return this.http.post<SaidaInsumos>(`${this.API_URL}/saida-insumos`, saidaInsumo, this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    public atualizarSaidaInsumo(idSaidaInsumo: number, saidaInsumo: SaidaInsumos) {
        return this.http.put<SaidaInsumos>(`${this.API_URL}/saida-insumos/${idSaidaInsumo}`, saidaInsumo, this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    public deletarSaidaInsumo(idSaidaInsumo: number) {
        return this.http.delete(`${this.API_URL}/saida-insumos/${idSaidaInsumo}`).toPromise();
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