import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { UsuarioLogin } from "../models/usuario-login.model";
import { UsuarioLoginService } from "../services/usuario-login.service";

@Injectable({ providedIn: 'root' })
export class UsuarioLoginApi {

    private API_URL = environment.API_URL;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    mostrarMenuEmitter = new EventEmitter<boolean>();

    constructor(private http: HttpClient,
        private usuarioLoginService: UsuarioLoginService) { }

    login(usuarioLogin: UsuarioLogin){
        return this.http.post<UsuarioLogin>(`${this.API_URL}/autenticacao`, usuarioLogin).pipe(
            tap((res: any) => {
                const authToken = res.token;
                this.usuarioLoginService.setToken(authToken);
                this.mostrarMenuEmitter.emit(true);
            })
        )
    }
}