import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { PlanoConta } from '../models/plano-conta.model';


@Injectable({providedIn: 'root'})
export class PlanoContaApi {

    private API_URL = environment.API_URL;
    
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient){}

    public getAllPlanoConta(): Observable<PlanoConta[]> {
        return this.http.get<PlanoConta[]>(`${this.API_URL}/plano-conta`).pipe(
            catchError(this.errorHandler)
        );
    }

    public getById(idPlanoconta: number) {
        return this.http.get(`${this.API_URL}/plano-conta/${idPlanoconta}`).toPromise();
    }

    public SalvarPlanoConta(planoConta: PlanoConta): Observable<PlanoConta> {
        return this.http.post<PlanoConta>(`${this.API_URL}/plano-conta`, planoConta, this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    public atualizarPlanoConta(idPlanoConta: number, planoConta: PlanoConta) {
        return this.http.put(`${this.API_URL}/plano-conta/${idPlanoConta}`, planoConta).toPromise();
    }

    public deletarPlanoConta(idPlanoConta: number) {
        return this.http.delete(`${this.API_URL}/plano-conta/${idPlanoConta}`).toPromise();
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