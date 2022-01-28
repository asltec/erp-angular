import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { MensagemService } from '../services/mensagem.service';
import { FornecedoresApi } from './api/fornecedores.api';
import { Fornecedores } from './models/fornecedores.model';
import { FornecedoresState } from './state/fornecedores.state';

@Injectable({ providedIn: 'root' })
export class FornecedoresFacade {

    public fornecedores$ = this.state.fornecedores.collection$;
    public carregando$ = this.state.carregando.document$;
    public quantidadeRegistros$ = this.state.fornecedores.quantidadeRegistros$;

    constructor(private state: FornecedoresState,
        private router: Router,
        private api: FornecedoresApi,
        private mensagemService: MensagemService) { }

    public getFornecedores() {
        this.api.getAllFornecedores().subscribe((res: Fornecedores[]) => {
            this.state.fornecedores.collection = res;
        })
    }

    public preencheForm(idRotaEditar$: Observable<number>): Observable<Fornecedores | null> {
        return idRotaEditar$.pipe(
            switchMap(id => id ? this.getById(id) : of(null)),
            tap(() => this.state.carregando.document = false),
            take(1)
        );
    }

    public salvar(fornecedor: Fornecedores, idRotaEditar$: Observable<number>): void {
        idRotaEditar$.pipe(
            take(1),
            tap(() => this.state.carregando.document = true),
            switchMap(id => id ? this.atualizar(id, fornecedor) : this.cadastrar(fornecedor)),
            tap(() => this.state.carregando.document = false))
            .subscribe(
                _ => this.voltarParaListagem(),
            )
    }

    private cadastrar(fornecedor: Fornecedores) {

        try {
            const res = this.api.salvarFornecedor(fornecedor)
            this.state.fornecedores.adicionar(fornecedor);
            return res;
        } catch (error) {
            return error;
        }
    }

    private atualizar(idFornecedor: number, fornecedor: Fornecedores) {
        fornecedor.id = idFornecedor;
        try {
            const res = this.api.atualizarFornecedor(idFornecedor, fornecedor)
            this.state.fornecedores.alterar(fornecedor);
            return res;
        } catch (error) {
            return error;
        }
    }

    private async getById(id: number) {
        const fornecedor = this.state.fornecedores.getById(id);
        if (fornecedor) {
            return fornecedor;
        }

        try {
            const res = await this.api.getById(id)
            return res;

        } catch (error) {
            this.voltarParaListagem();
        }
    }

    public async excluir(idFornecedor: number): Promise<void> {

        if (!await this.mensagemService.perguntaExclusao()) {
            return;
        }

        try {
            const response = await this.api.deletarFornecedor(idFornecedor);
            this.state.fornecedores.excluir(idFornecedor);
            this.getFornecedores();

        } catch (error) {
            console.error(error);
        }
    }

    public async acessarRotaCadastro() {
        this.router.navigate([`cadastro/fornecedores/adicionar`]);
    }

    public acessarRotaEdicao(idFornecedor: number): void {
        this.router.navigate([`cadastro/fornecedores/${idFornecedor}/alterar`]);
    }

    public voltarParaListagem(): void {
        this.router.navigate(['cadastro/fornecedores']);
    }


}