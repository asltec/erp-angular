import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Clientes } from '../models/clientes.model';

@Injectable({ providedIn: 'root' })
export class ClientesService {
    private API_URL = environment.API_URL;
    
    constructor(private http: HttpClient) {}  
    
    getClientes(): Observable < Clientes[] > {  
        return this.http.get < Clientes[] > (`${this.API_URL}clientes`);  
    }  

}