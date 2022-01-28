import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PlanoConta } from '../../plano-conta/models/plano-conta.model';


@Injectable({providedIn: 'root'})
export class PlanoContasService {
    private API_URL = environment.API_URL;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }


    constructor(private http: HttpClient){}

    getPlanoContas(): Observable < PlanoConta[] > {  
        return this.http.get < PlanoConta[] > (`${this.API_URL}/plano-conta`, this.httpOptions);  
    }  
}