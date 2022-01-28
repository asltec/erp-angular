import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ContasReceber } from '../models/contas-receber.model';

@Injectable({ providedIn: 'root' })
export class ContasReceberApi {

    private API_URL = environment.API_URL;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient){}

    public getAllContasReceber(): Observable<ContasReceber[]> {
        return this.http.get<ContasReceber[]>(`${this.API_URL}/contas-receber`).pipe(
            catchError(this.errorHandler)
        );
    }
    
    public getById(idContasReceber: number) {
        return this.http.get(`${this.API_URL}/contas-receber/${idContasReceber}`, this.httpOptions).toPromise();
    }

    public salvarContasReceber(contasReceber: ContasReceber): Observable<ContasReceber> {
        return this.http.post<ContasReceber>(`${this.API_URL}/contas-receber`, contasReceber, this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    public atualizarContasReceber(idContasReceber: number, contasReceber: ContasReceber) {
        return this.http.put<ContasReceber>(`${this.API_URL}/contas-receber/${idContasReceber}`, contasReceber, this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    public deletarContasReceber(idContasReceber: number) {
        return this.http.delete(`${this.API_URL}/contas-receber/${idContasReceber}`).toPromise();
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