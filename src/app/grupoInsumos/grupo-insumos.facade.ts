import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { MensagemService } from '../services/mensagem.service';
import { GrupoInsumosApi } from './api/grupo-insumos.api';
import { GrupoInsumos } from './models/grupo-insumos.model';
import { GrupoInsumosState } from './state/grupo-insumos.state';

@Injectable({ providedIn: 'root' })
export class GrupoInsumosFacade {

    public contasReceber$ = this.state.grupoInsumos.collection$;
    public carregando$ = this.state.carregando.document$;
    public quantidadeRegistros$ = this.state.grupoInsumos.quantidadeRegistros$;

    constructor(private api: GrupoInsumosApi,
        private state: GrupoInsumosState,
        private router: Router,
        private mensagemService: MensagemService) { }


    public getGrupoInsumos() {
        this.api.getAllGrupoInsumos().subscribe((res: GrupoInsumos[]) => {
            this.state.grupoInsumos.collection = res;
        })
    }

    public preencheForm(idRotaEditar$: Observable<number>): Observable<GrupoInsumos | null> {
        return idRotaEditar$.pipe(
            switchMap(id => id ? this.getById(id) : of(null)),
            tap(() => this.state.carregando.document = false),
            take(1)
        );
    }

    public salvar(grupoInsumos: GrupoInsumos, idRotaEditar$: Observable<number>): void {
        idRotaEditar$.pipe(
            take(1),
            tap(() => this.state.carregando.document = true),
            switchMap(id => id ? this.atualizar(id, grupoInsumos) : this.cadastrar(grupoInsumos)),
            tap(() => this.state.carregando.document = false))
            .subscribe(
                _ => this.voltarParaListagem(),
            )
    }

    private cadastrar(grupoInsumos: GrupoInsumos) {

        try {
            const res = this.api.salvarGrupoInsumo(grupoInsumos)
            this.state.grupoInsumos.adicionar(grupoInsumos);
            return res;
        } catch (error) {
            return error;
        }
    }

    private atualizar(idGrupoInsumo: number, grupoInsumos: GrupoInsumos) {
        grupoInsumos.id = idGrupoInsumo;
        try {
            const res = this.api.atualizarGrupoInsumo(idGrupoInsumo, grupoInsumos)
            this.state.grupoInsumos.alterar(grupoInsumos);
            return res;
        } catch (error) {
            return error;
        }
    }

    private async getById(id: number) {
        const grupoInsumos = this.state.grupoInsumos.getById(id);
        if (grupoInsumos) {
            return grupoInsumos;
        }

        try {
            const res = await this.api.getById(id)
            return res;

        } catch (error) {
            this.voltarParaListagem();
        }
    }

    public async excluir(idGrupoInsumo: number): Promise<void> {

        if (!await this.mensagemService.perguntaExclusao()) {
            return;
        }

        try {
            const response = await this.api.deletarGrupoInsumo(idGrupoInsumo);
            this.state.grupoInsumos.excluir(idGrupoInsumo);
            this.getGrupoInsumos();

        } catch (error) {
            console.error(error);
        }
    }

    public async acessarRotaCadastro() {
        this.router.navigate([`estoque/grupo-insumos/adicionar`]);
    }

    public acessarRotaEdicao(idGrupoInsumo: number): void {
        this.router.navigate([`estoque/grupo-insumos/${idGrupoInsumo}/alterar`]);
    }

    public voltarParaListagem(): void {
        this.router.navigate(['estoque/grupo-insumos']);
    }
}