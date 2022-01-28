import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { MensagemService } from '../../services/mensagem.service';
import { ContasPagarApi } from './api/contas-pagar.api';
import { ContasPagar } from './models/contas-pagar.model';
import { PlanoContasService } from './services/plano-contas.service';
import { ContasPagarState } from './state/contas-pagar.state';

@Injectable({ providedIn: 'root' })
export class ContasPagarFacade {

    public contasPagar$ = this.state.contasPagar.collection$;
    public carregando$ = this.state.carregando.document$;
    public quantidadeRegistros$ = this.state.contasPagar.quantidadeRegistros$;
    public contas_pagar = this.state.contasPagar.collection;

    constructor(private state: ContasPagarState,
        private router: Router,
        private api: ContasPagarApi,
        private mensagemService: MensagemService,
        private planoContasService: PlanoContasService) { }


    public getPlanoContas() {
        return this.planoContasService.getPlanoContas();
    }

    public getContasPagar() {
        this.api.getAllContasPagar().subscribe((res: ContasPagar[]) => {
            this.state.contasPagar.collection = res;
        })
    }

    public preencheForm(idRotaEditar$: Observable<number>): Observable<ContasPagar | null> {
        return idRotaEditar$.pipe(
            switchMap(id => id ? this.getById(id) : of(null)),
            tap(() => this.state.carregando.document = false),
            take(1)
        );
    }

    public salvar(contasPagar: ContasPagar, idRotaEditar$: Observable<number>): void {
        idRotaEditar$.pipe(
            take(1),
            tap(() => this.state.carregando.document = true),
            switchMap(id => id ? this.atualizar(id, contasPagar) : this.cadastrar(contasPagar)),
            tap(() => this.state.carregando.document = false))
            .subscribe(
                _ => this.voltarParaListagem(),
            )
    }

    private cadastrar(contasPagar: ContasPagar) {

        try {
            const res = this.api.salvarContasPagar(contasPagar)
            this.state.contasPagar.adicionar(contasPagar);
            return res;
        } catch (error) {
            return error;
        }
    }

    private atualizar(idContasPagar: number, contasPagar: ContasPagar) {
        contasPagar.id = idContasPagar;
        try {
            const res = this.api.atualizarContasPagar(idContasPagar, contasPagar)
            this.state.contasPagar.alterar(contasPagar);
            return res;
        } catch (error) {
            return error;
        }
    }

    private async getById(id: number) {
        const contasPagar = this.state.contasPagar.getById(id);
        if (contasPagar) {
            return contasPagar;
        }

        try {
            const res = await this.api.getById(id)
            return res;

        } catch (error) {
            this.voltarParaListagem();
        }
    }

    public async excluir(idContasPagas: number): Promise<void> {

        if (!await this.mensagemService.perguntaExclusao()) {
            return;
        }

        try {
            const response = await this.api.deletarContasPagar(idContasPagas);
            this.state.contasPagar.excluir(idContasPagas);
            this.getContasPagar();

        } catch (error) {
            console.error(error);
        }
    }

    public async acessarRotaCadastro() {
        this.router.navigate([`financeiro/contas-pagar/adicionar`]);
    }

    public acessarRotaEdicao(idContasPagar: number): void {
        this.router.navigate([`financeiro/contas-pagar/${idContasPagar}/alterar`]);
    }

    public voltarParaListagem(): void {
        this.router.navigate(['financeiro/contas-pagar']);
    }

}