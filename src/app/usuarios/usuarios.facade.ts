import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { MensagemService } from '../services/mensagem.service';
import { UsuariosApi } from './api/usuarios.api';
import { Usuarios } from './models/usuarios.model';
import { UsuariosState } from './state/usuarios.state';

@Injectable({ providedIn: 'root' })
export class UsuariosFacade {

    public usuarios$ = this.state.usuarios.collection$;
    public carregando$ = this.state.carregando.document$;
    public quantidadeRegistros$ = this.state.usuarios.quantidadeRegistros$;


    constructor(private state: UsuariosState,
        private router: Router,
        private api: UsuariosApi,
        private mensagemService: MensagemService) { }



    public getUsuarios() {
        this.api.getAllUsuarios().subscribe((res: Usuarios[]) => {
            this.state.usuarios.collection = res;
        })
    }

    public preencheForm(idRotaEditar$: Observable<number>): Observable<Usuarios | null> {
        return idRotaEditar$.pipe(
            switchMap(id => id ? this.getById(id) : of(null)),
            tap(() => this.state.carregando.document = false),
            take(1)
        );
    }

    public salvar(usuario: Usuarios, idRotaEditar$: Observable<number>): void {
        idRotaEditar$.pipe(
            take(1),
            tap(() => this.state.carregando.document = true),
            switchMap(id => id ? this.atualizar(id, usuario) : this.cadastrar(usuario)),
            tap(() => this.state.carregando.document = false))
            .subscribe(
                _ => this.voltarParaListagem(),
            )
    }

    private cadastrar(usuario: Usuarios) {

        try {
            const res = this.api.salvarUsuario(usuario)
            this.state.usuarios.adicionar(usuario);
            return res;
        } catch (error) {
            return error;
        }
    }

    private atualizar(idUsuario: number, usuario: Usuarios) {
        usuario.id = idUsuario;
        try {
            const res = this.api.atualizarUsuario(idUsuario, usuario)
            this.state.usuarios.alterar(usuario);
            return res;
        } catch (error) {
            return error;
        }
    }

    private async getById(id: number) {
        const usuario = this.state.usuarios.getById(id);
        if (usuario) {
            return usuario;
        }

        try {
            const res = await this.api.getById(id)
            return res;

        } catch (error) {
            this.voltarParaListagem();
        }
    }

    public async excluir(idUsuario: number): Promise<void> {

        if (!await this.mensagemService.perguntaExclusao()) {
            return;
        }

        try {
            const response = await this.api.deletarUsuario(idUsuario);
            this.state.usuarios.excluir(idUsuario);
            this.getUsuarios();

        } catch (error) {
            console.error(error);
        }
    }

    public async acessarRotaCadastro() {
        this.router.navigate([`cadastro/usuarios/adicionar`]);
    }

    public acessarRotaEdicao(idUsuario: number): void {
        this.router.navigate([`cadastro/usuarios/${idUsuario}/alterar`]);
    }

    public voltarParaListagem(): void {
        this.router.navigate(['cadastro/usuarios']);
    }
}