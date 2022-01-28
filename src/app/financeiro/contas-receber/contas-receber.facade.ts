import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { MensagemService } from '../../services/mensagem.service';
import { ContasReceberApi } from './api/contas-receber.api';
import { ContasReceber } from './models/contas-receber.model';
import { ClientesService } from './services/cliente.service';
import { ContasReceberState } from './state/contas-receber.state';

@Injectable({ providedIn: 'root' })
export class ContasReceberFacade {

    public contasReceber$ = this.state.contasReceber.collection$;
    public carregando$ = this.state.carregando.document$;
    public quantidadeRegistros$ = this.state.contasReceber.quantidadeRegistros$;

    constructor(private state: ContasReceberState,
        private router: Router,
        private api: ContasReceberApi,
        private mensagemService: MensagemService,
        private clienteService: ClientesService) { }

    public getClientes() {
        return this.clienteService.getClientes();
    }

    public getContasReceber() {
        this.api.getAllContasReceber().subscribe((res: ContasReceber[]) => {
            this.state.contasReceber.collection = res;
        })
    }

    public preencheForm(idRotaEditar$: Observable<number>): Observable<ContasReceber | null> {
        return idRotaEditar$.pipe(
            switchMap(id => id ? this.getById(id) : of(null)),
            tap(() => this.state.carregando.document = false),
            take(1)
        );
    }

    public salvar(contasReceber: ContasReceber, idRotaEditar$: Observable<number>): void {
        idRotaEditar$.pipe(
            take(1),
            tap(() => this.state.carregando.document = true),
            switchMap(id => id ? this.atualizar(id, contasReceber) : this.cadastrar(contasReceber)),
            tap(() => this.state.carregando.document = false))
            .subscribe(
                _ => this.voltarParaListagem(),
            )
    }

    private cadastrar(contasReceber: ContasReceber) {

        try {
            const res = this.api.salvarContasReceber(contasReceber)
            this.state.contasReceber.adicionar(contasReceber);
            return res;
        } catch (error) {
            return error;
        }
    }

    private atualizar(idContasReceber: number, contasReceber: ContasReceber) {
        contasReceber.id = idContasReceber;
        try {
            const res = this.api.atualizarContasReceber(idContasReceber, contasReceber)
            this.state.contasReceber.alterar(contasReceber);
            return res;
        } catch (error) {
            return error;
        }
    }

    private async getById(id: number) {
        const contasReceber = this.state.contasReceber.getById(id);
        if (contasReceber) {
            return contasReceber;
        }

        try {
            const res = await this.api.getById(id)
            return res;

        } catch (error) {
            this.voltarParaListagem();
        }
    }

    public async excluir(idContasReceber: number): Promise<void> {

        if (!await this.mensagemService.perguntaExclusao()) {
            return;
        }

        try {
            const response = await this.api.deletarContasReceber(idContasReceber);
            this.state.contasReceber.excluir(idContasReceber);
            this.getContasReceber();

        } catch (error) {
            console.error(error);
        }
    }

    public async acessarRotaCadastro() {
        this.router.navigate([`financeiro/contas-receber/adicionar`]);
    }

    public acessarRotaEdicao(idContasPagar: number): void {
        this.router.navigate([`financeiro/contas-receber/${idContasPagar}/alterar`]);
    }

    public voltarParaListagem(): void {
        this.router.navigate(['financeiro/contas-receber']);
    }
}