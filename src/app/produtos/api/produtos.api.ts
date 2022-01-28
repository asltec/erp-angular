import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Produtos } from '../models/produtos.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProdutosApi {

   
    private API_URL = environment.API_URL;

    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    public getAllProdutos() {
        return this.http.get<Produtos[]>(`${this.API_URL}/produtos`).toPromise();
    }
    
    public getById(idProduto: number){
        return this.http.get(`${this.API_URL}/produtos/${idProduto}`,{ headers: this.headers }).toPromise();
    }
    
    public salvarProduto(produto: Produtos) {
        return this.http.post(`${this.API_URL}/produtos`, produto).toPromise()
    }
    
    public atualizarProduto(idProduto: number, produto: Produtos) {
        return this.http.put(`${this.API_URL}/produtos/${idProduto}`, produto).toPromise();
    }

    public deletarProduto(idProduto : number){
        return this.http.delete(`${this.API_URL}/produtos/${idProduto}`).toPromise();
    }

    errorMgmt(error: HttpErrorResponse) {
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