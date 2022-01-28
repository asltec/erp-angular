import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Funcionarios } from '../models/funcionarios.model';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FuncionariosApi {

    private API_URL = environment.API_URL;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient) { }

    // public getAllFuncionarios() {
    //     return this.http.get<Funcionarios[]>(`${this.API_URL}/funcionarios`).toPromise();
    // }

    public getAllFuncionarios(): Observable<Funcionarios[]> {
        return this.http.get<Funcionarios[]>(`${this.API_URL}/funcionarios`).pipe(
            catchError(this.errorHandler)
        );
    }


    public getById(idFuncionario: number) {
        return this.http.get(`${this.API_URL}/funcionarios/${idFuncionario}`, this.httpOptions).toPromise();
    }

    public salvarFuncionario(funcionario: Funcionarios) {
        return this.http.post(`${this.API_URL}/funcionarios`, funcionario).toPromise()
    }

    public atualizarFuncionario(idFuncionario: number, funcionario: Funcionarios) {
        return this.http.put(`${this.API_URL}/funcionarios/${idFuncionario}`, funcionario).toPromise();
    }

    public deletarFuncionario(idFuncionario: number) {
        return this.http.delete(`${this.API_URL}/funcionarios/${idFuncionario}`).toPromise();
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