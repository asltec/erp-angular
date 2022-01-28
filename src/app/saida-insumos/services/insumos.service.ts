import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Insumos } from '../../insumos/models/insumos.model';

@Injectable({ providedIn: 'root' })
export class InsumosService {

    private API_URL = environment.API_URL;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    
    constructor(private http: HttpClient){}

    public getInsumos(): Observable<Insumos[]> {
        return this.http.get<Insumos[]>(`${this.API_URL}/insumos`, this.httpOptions);
    }


}