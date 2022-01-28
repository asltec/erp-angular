import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { UsuarioLogin } from "../models/usuario-login.model";
import { TokenService } from "./token.service";
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class UsuarioLoginService {

    private usuarioLoginSubject$ = new BehaviorSubject<UsuarioLogin>(null);
    public usuario$ = this.usuarioLoginSubject$.asObservable();

    constructor(private tokenService: TokenService,
        private router: Router) {
        if (this.tokenService.possuiToken()) {
            this.atualizaUsuario();
        }
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
    }

    getUsuarioLogin() {
        return this.usuarioLoginSubject$.getValue();
    }

    private atualizaUsuario() {
        const token = this.tokenService.getToken();

        const usuarioLogin = jwt_decode(token) as UsuarioLogin;
        if (usuarioLogin) {
            this.usuarioLoginSubject$.next(usuarioLogin);
        }
    }

    logout(){
        this.tokenService.removerToken();
        this.usuarioLoginSubject$.next(null);
        this.router.navigate(['/login']);
    }

    isLogado(){
        return this.tokenService.possuiToken();
    }
}