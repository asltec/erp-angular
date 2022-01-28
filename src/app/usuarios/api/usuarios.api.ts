import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Usuarios } from '../models/usuarios.model';

@Injectable({providedIn: 'root'})
export class UsuariosApi{

    private API_URL = environment.API_URL;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient){}


    public getAllUsuarios(): Observable<Usuarios[]> {
        return this.http.get<Usuarios[]>(`${this.API_URL}/usuarios`).pipe(
            catchError(this.errorHandler)
        );
    }

    public getById(idUsuario: number) {
        return this.http.get(`${this.API_URL}/usuarios/${idUsuario}`, this.httpOptions).toPromise();
    }

  

    public salvarUsuario(usuario: Usuarios): Observable<Usuarios> {
        return this.http.post<Usuarios>(`${this.API_URL}/usuarios`, usuario, this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    public atualizarUsuario(idUsuario: number, usuario: Usuarios) {
        return this.http.put<Usuarios>(`${this.API_URL}/usuarios/${idUsuario}`, usuario, this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    public deletarUsuario(idUsuario: number) {
        return this.http.delete(`${this.API_URL}/usuarios/${idUsuario}`).toPromise();
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