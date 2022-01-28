import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Produtos } from '../../produtos/models/produtos.model';

@Injectable({providedIn: 'root'})
export class ProdutosService {

    private API_URL = environment.API_URL;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient){}

    public getProdutos(): Observable<Produtos[]> {
        return this.http.get<Produtos[]>(`${this.API_URL}/produtos`, this.httpOptions);
    }

}