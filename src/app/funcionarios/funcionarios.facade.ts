import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { MensagemService } from '../services/mensagem.service';
import { FuncionariosApi } from './api/funcionarios.api';
import { Funcionarios } from './models/funcionarios.model';
import { FuncionariosState } from './state/funcionarios.state';

@Injectable({ providedIn: 'root' })
export class FuncionariosFacade {

    public funcionarios$ = this.state.funcionarios.collection$;
    public carregando$ = this.state.carregando.document$;
    public quantidadeRegistros$ = this.state.funcionarios.quantidadeRegistros$;

    constructor(private state: FuncionariosState,
        private router: Router,
        private api: FuncionariosApi,
        private mensagemService: MensagemService) { }

    // public async getFuncionarios() {
    //     const res = await this.api.getAllFuncionarios();
    //     this.state.funcionarios.collection = res
    // }


    public getFuncionarios() {
        this.api.getAllFuncionarios().subscribe((res: Funcionarios[]) => {
            this.state.funcionarios.collection = res;
        })
    }

    public preencheForm(idRotaEditar$: Observable<number>): Observable<Funcionarios | null> {
        return idRotaEditar$.pipe(
            switchMap(id => id ? this.getById(id) : of(null)),
            tap(() => this.state.carregando.document = false),
            take(1)
        );
    }

    public salvar(funcionario: Funcionarios, idRotaEditar$: Observable<number>): void {
        idRotaEditar$.pipe(
            take(1),
            tap(() => this.state.carregando.document = true),
            switchMap(id => id ? this.atualizar(id, funcionario) : this.cadastrar(funcionario)),
            tap(() => this.state.carregando.document = false))
            .subscribe(
                _ => this.voltarParaListagem(),
            )
    }

    private async cadastrar(funcionario: Funcionarios) {

        try {
            const res = await this.api.salvarFuncionario(funcionario);
            this.state.funcionarios.adicionar(funcionario);
            return res;
        } catch (error) {
            return error;
        }
    }

    private async atualizar(idFuncionario: number, funcionario: Funcionarios) {
        funcionario.id = idFuncionario;
        try {
            const res = await this.api.atualizarFuncionario(idFuncionario, funcionario);
            this.state.funcionarios.alterar(funcionario);
            return res;
        } catch (error) {
            return error;
        }
    }

    private async getById(id: number) {
        const funcionario = this.state.funcionarios.getById(id);
        if (funcionario) {
            return funcionario;
        }

        try {
            const res = await this.api.getById(id)
            return res;

        } catch (error) {
            this.voltarParaListagem();
        }
    }

    public async excluir(idFuncionario: number): Promise<void> {

        if (!await this.mensagemService.perguntaExclusao()) {
            return;
        }


        try {
            const response = await this.api.deletarFuncionario(idFuncionario).then((res) => {
                this.state.funcionarios.excluir(idFuncionario);
                this.getFuncionarios();
            });
        } catch (error) {
            console.error(error);
        }
    }

    public async acessarRotaCadastro() {
        this.router.navigate([`cadastro/funcionarios/adicionar`]);
    }

    public acessarRotaEdicao(idFuncionario: number): void {
        this.router.navigate([`cadastro/funcionarios/${idFuncionario}/alterar`]);
    }

    // public acessarRotaDetalhes(idCliente: number): void {
    //     this.router.navigate([`cadastros/${idCliente}/detalhes`]);
    // }

    public voltarParaListagem(): void {
        this.router.navigate(['cadastro/funcionarios']);
    }


}