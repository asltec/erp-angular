import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Fornecedores } from '../models/fornecedores.model';

@Injectable({ providedIn: 'root' })
export class FornecedoresService {

    private API_URL = environment.API_URL;

    constructor(private http: HttpClient){}


    getFornecedores(): Observable < Fornecedores[] > {  
        return this.http.get < Fornecedores[] > (`${this.API_URL}/fornecedores`);  
    }  

}