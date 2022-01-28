import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { MensagemService } from '../services/mensagem.service';
import { InsumosApi } from './api/insumos.api';
import { Insumos } from './models/insumos.model';
import { GrupoInsumosService } from './services/grupo-insumos.service';
import { InsumosState } from './state/insumos.state';

@Injectable({ providedIn: 'root' })
export class InsumosFacade {

    public insumos$ = this.state.insumos.collection$;
    public carregando$ = this.state.carregando.document$;
    public quantidadeRegistros$ = this.state.insumos.quantidadeRegistros$;

    constructor(private api: InsumosApi,
        private state: InsumosState,
        private router: Router,
        private mensagemService: MensagemService,
        private grupoInsumoService: GrupoInsumosService) { }



    public async getInsumos() {
        const res = await this.api.getAllInsumos();
        this.state.insumos.collection = res
    }

    public getGrupoInsumos() {
        return this.grupoInsumoService.getGrupoInsumos();
    }

    public preencheForm(idRotaEditar$: Observable<number>): Observable<Insumos | null> {
        return idRotaEditar$.pipe(
            switchMap(id => id ? this.getById(id) : of(null)),
            tap(() => this.state.carregando.document = false),
            take(1)
        );
    }

    public salvar(produto: Insumos, idRotaEditar$: Observable<number>): void {
        idRotaEditar$.pipe(
            take(1),
            tap(() => this.state.carregando.document = true),
            switchMap(id => id ? this.atualizar(id, produto) : this.cadastrar(produto)),
            tap(() => this.state.carregando.document = false))
            .subscribe(
                _ => this.voltarParaListagem(),
            )
    }

    private async cadastrar(insumo: Insumos) {

        try {
            const res = await this.api.salvarInsumo(insumo).then((response) => {
                this.state.insumos.adicionar(insumo);
                this.mensagemService.perguntaConfirmação(res);
            });
           
        } catch (error) {
            return error;
        }
    }

    private async atualizar(idInsumo: number, insumo: Insumos) {
        insumo.id = idInsumo;
        try {
            const res = await this.api.atualizarInsumo(idInsumo, insumo);
            this.state.insumos.alterar(insumo);
            return res;
        } catch (error) {
            return error;
        }
    }

    private async getById(id: number) {
        const produto = this.state.insumos.getById(id);
        if (produto) {
            return produto;
        }

        try {
            const res = await this.api.getById(id)
            return res;

        } catch (error) {
            this.voltarParaListagem();
        }
    }

    public async excluir(idInsumo: number): Promise<void> {

        if (!await this.mensagemService.perguntaExclusao()) {
            return;
        }

        try {
            const response = await this.api.deletarInsumo(idInsumo).then((res) => {
                this.state.insumos.excluir(idInsumo);
                this.getInsumos();
            });
        } catch (error) {
            console.error(error);
        }
    }

    public async acessarRotaCadastro() {
        this.router.navigate([`estoque/insumos/adicionar`]);
    }

    public acessarRotaEdicao(idInsumo: number): void {
        this.router.navigate([`estoque/insumos/${idInsumo}/alterar`]);
    }

    public voltarParaListagem(): void {
        this.router.navigate(['estoque/insumos']);
    }
}