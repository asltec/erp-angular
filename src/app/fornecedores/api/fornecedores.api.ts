import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Fornecedores } from '../models/fornecedores.model';

@Injectable({ providedIn: 'root' })
export class FornecedoresApi {

    private API_URL = environment.API_URL;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }


    constructor(private http: HttpClient) {}

    public getAllFornecedores(): Observable<Fornecedores[]> {
        return this.http.get<Fornecedores[]>(`${this.API_URL}/fornecedores`).pipe(
            catchError(this.errorHandler)
        );
    }
    
    public getById(idFornecedor: number) {
        return this.http.get(`${this.API_URL}/fornecedores/${idFornecedor}`, this.httpOptions).toPromise();
    }

    public salvarFornecedor(fornecedor: Fornecedores): Observable<Fornecedores> {
        return this.http.post<Fornecedores>(`${this.API_URL}/fornecedores`, fornecedor, this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    public atualizarFornecedor(idFornecedor: number, fornecedor: Fornecedores) {
        return this.http.put<Fornecedores>(`${this.API_URL}/fornecedores/${idFornecedor}`, fornecedor, this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    public deletarFornecedor(idFornecedor: number) {
        return this.http.delete(`${this.API_URL}/fornecedores/${idFornecedor}`).toPromise();
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