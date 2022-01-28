import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { MensagemService } from '../services/mensagem.service';
import { ProdutosApi } from './api/produtos.api';
import { Produtos } from './models/produtos.model';
import { ProdutosState } from './state/produtos.state';

@Injectable({ providedIn: 'root' })
export class ProdutosFacade {

    public produtos$ = this.state.produtos.collection$;
    public carregando$ = this.state.carregando.document$;
    public quantidadeRegistros$ = this.state.produtos.quantidadeRegistros$;

    constructor(private api: ProdutosApi,
        private state: ProdutosState,
        private router: Router,
        private mensagemService: MensagemService) { }

    public async getProdutos() {
        const res = await this.api.getAllProdutos();
        this.state.produtos.collection = res
    }

    public preencheForm(idRotaEditar$: Observable<number>): Observable<Produtos | null> {
        return idRotaEditar$.pipe(
            switchMap(id => id ? this.getById(id) : of(null)),
            tap(() => this.state.carregando.document = false),
            take(1)
        );
    }

    public salvar(produto: Produtos, idRotaEditar$: Observable<number>): void {
        idRotaEditar$.pipe(
            take(1),
            tap(() => this.state.carregando.document = true),
            switchMap(id => id ? this.atualizar(id, produto) : this.cadastrar(produto)),
            tap(() => this.state.carregando.document = false))
            .subscribe(
                _ => this.voltarParaListagem(),
            )
    }


    private async cadastrar(produto: Produtos) {

        try {
            const res = await this.api.salvarProduto(produto);
            this.state.produtos.adicionar(produto);
            return res;
        } catch (error) {
            return error;
        }
    }

    private async atualizar(idProduto: number, produto: Produtos) {
        produto.id = idProduto;
        try {
            const res = await this.api.atualizarProduto(idProduto, produto);
            this.state.produtos.alterar(produto);
            return res;
        } catch (error) {
            return error;
        }
    }

    private async getById(id: number) {
        const produto = this.state.produtos.getById(id);
        if (produto) {
            return produto;
        }

        try {
            const res = await this.api.getById(id);
            return res;

        } catch (error) {
            this.voltarParaListagem();
        }
    }

    public async excluir(idProduto: number): Promise<void> {

        if (!await this.mensagemService.perguntaExclusao()) {
            return;
        }

        try {
            const response = await this.api.deletarProduto(idProduto);
            this.state.produtos.excluir(idProduto);
            this.getProdutos();
        } catch (error) {
            console.error(error);
        }
    }

    public async acessarRotaCadastro() {
        this.router.navigate([`estoque/cadastro`]);
    }

    public acessarRotaEdicao(idProduto: number): void {
        this.router.navigate([`estoque/${idProduto}/alterar`]);
    }

    public voltarParaListagem(): void {
        this.router.navigate(['estoque/produtos']);
    }

}