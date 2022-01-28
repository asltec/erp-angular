import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Funcionarios } from '../models/funcionarios.model';

@Injectable({ providedIn: 'root' })
export class FuncionariosService {

    private API_URL = environment.API_URL;

    constructor(private http: HttpClient){}

    getFuncionarios(): Observable < Funcionarios[] > {  
        return this.http.get < Funcionarios[] > (`${this.API_URL}/funcionarios`);  
    }  

}