import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ContasPagar } from '../models/contas-pagar.model';

@Injectable({ providedIn: 'root' })
export class ContasPagarApi {

    private API_URL = environment.API_URL;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient) { }


    public getAllContasPagar(): Observable<ContasPagar[]> {
        return this.http.get<ContasPagar[]>(`${this.API_URL}/contas-pagar`).pipe(
            catchError(this.errorHandler)
        );
    }

    public getById(idContasPagar: number) {
        return this.http.get(`${this.API_URL}/contas-pagar/${idContasPagar}`, this.httpOptions).toPromise();
    }

    public salvarContasPagar(contasPagar: ContasPagar): Observable<ContasPagar> {
        return this.http.post<ContasPagar>(`${this.API_URL}/contas-pagar`, JSON.stringify(contasPagar), this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    public atualizarContasPagar(idContasPagar: number, contasPagar: ContasPagar) {
        return this.http.put<ContasPagar>(`${this.API_URL}/contas-pagar/${idContasPagar}`, contasPagar, this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    public deletarContasPagar(idContasPagas: number) {
        return this.http.delete(`${this.API_URL}/contas-pagar/${idContasPagas}`).toPromise();
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