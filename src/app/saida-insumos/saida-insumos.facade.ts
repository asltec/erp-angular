import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { MensagemService } from '../services/mensagem.service';
import { SaidaInsumosApi } from './api/saida-insumos.api';
import { SaidaInsumos } from './models/saida-insumos.model';
import { SaidaInsumosState } from './state/saida-insumos.state';

@Injectable({ providedIn: 'root' })
export class SaidaInsumosFacade {

    public saidaInsumos$ = this.state.saidaInsumos.collection$;
    public carregando$ = this.state.carregando.document$;
    public quantidadeRegistros$ = this.state.saidaInsumos.quantidadeRegistros$;


    constructor(private state: SaidaInsumosState,
        private router: Router,
        private api: SaidaInsumosApi,
        private mensagemService: MensagemService) { }

    public getSaidaInsumos() {
        this.api.getAllSaidaInsumos().subscribe((res: SaidaInsumos[]) => {
            this.state.saidaInsumos.collection = res;
        })
    }

    public preencheForm(idRotaEditar$: Observable<number>): Observable<SaidaInsumos | null> {
        return idRotaEditar$.pipe(
            switchMap(id => id ? this.getById(id) : of(null)),
            tap(() => this.state.carregando.document = false),
            take(1)
        );
    }

    public salvar(saidaInsumo: SaidaInsumos, idRotaEditar$: Observable<number>): void {
        idRotaEditar$.pipe(
            take(1),
            tap(() => this.state.carregando.document = true),
            switchMap(id => id ? this.atualizar(id, saidaInsumo) : this.cadastrar(saidaInsumo)),
            tap(() => this.state.carregando.document = false))
            .subscribe(
                _ => this.voltarParaListagem(),
            )
    }

    private cadastrar(saidaInsumo: SaidaInsumos) {

        try {
            const res = this.api.salvarSaidaInsumo(saidaInsumo)
            this.state.saidaInsumos.adicionar(saidaInsumo);
            return res;
        } catch (error) {
            return error;
        }
    }

    private atualizar(idSaidaInsumo: number, saidaInsumo: SaidaInsumos) {
        saidaInsumo.id = idSaidaInsumo;
        try {
            const res = this.api.atualizarSaidaInsumo(idSaidaInsumo, saidaInsumo)
            this.state.saidaInsumos.alterar(saidaInsumo);
            return res;
        } catch (error) {
            return error;
        }
    }

    private async getById(id: number) {
        const saidaInsumo = this.state.saidaInsumos.getById(id);
        if (saidaInsumo) {
            return saidaInsumo;
        }

        try {
            const res = await this.api.getById(id)
            return res;

        } catch (error) {
            this.voltarParaListagem();
        }
    }

    public async excluir(idSaidaInsumo: number): Promise<void> {

        if (!await this.mensagemService.perguntaExclusao()) {
            return;
        }

        try {
            const response = await this.api.deletarSaidaInsumo(idSaidaInsumo);
            this.state.saidaInsumos.excluir(idSaidaInsumo);
            this.getSaidaInsumos();

        } catch (error) {
            console.error(error);
        }
    }

    public async acessarRotaCadastro() {
        this.router.navigate([`estoque/saida-insumos/adicionar`]);
    }

    public acessarRotaEdicao(idSaidaInsumo: number): void {
        this.router.navigate([`estoque/saida-insumos/${idSaidaInsumo}/alterar`]);
    }

    public voltarParaListagem(): void {
        this.router.navigate(['estoque/saida-insumos']);
    }


}