import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { switchMap, take, tap } from 'rxjs/operators';
import { MensagemService } from '../services/mensagem.service';
import { ClientesApi } from './api/clientes.api';
import { Clientes } from './models/clientes.model';
import { ClientesState } from './state/clientes.state';

@Injectable({ providedIn: 'root' })
export class ClientesFacade {

    public clientes$ = this.state.clientes.collection$;
    public carregando$ = this.state.carregando.document$;
    public quantidadeRegistros$ = this.state.clientes.quantidadeRegistros$;

    constructor(private state: ClientesState,
        private router: Router,
        private api: ClientesApi,
        private mensagemService: MensagemService) { }


    public getClientes() {
        this.api.getAllClientes().subscribe((res: Clientes[]) => {
            this.state.clientes.collection = res;
        })
    }

    public preencheForm(idRotaEditar$: Observable<number>): Observable<Clientes | null> {
        return idRotaEditar$.pipe(
            switchMap(id => id ? this.getById(id) : of(null)),
            tap(() => this.state.carregando.document = false),
            take(1)
        );
    }

    public salvar(cliente: Clientes, idRotaEditar$: Observable<number>): void {
        idRotaEditar$.pipe(
            take(1),
            tap(() => this.state.carregando.document = true),
            switchMap(id => id ? this.atualizar(id, cliente) : this.cadastrar(cliente)),
            tap(() => this.state.carregando.document = false))
            .subscribe(
                _ => this.voltarParaListagem(),
            )
    }

    private async cadastrar(cliente: Clientes) {

        try {
            const res = await this.api.salvarCliente(cliente);
            this.state.clientes.adicionar(cliente);
            return res;
        } catch (error) {
            return error;
        }
    }

    private async atualizar(idCliente: number, cliente: Clientes) {
        cliente.id = idCliente;
        try {
            const res = await this.api.atualizarCliente(idCliente, cliente);
            this.state.clientes.alterar(cliente);
            return res;
        } catch (error) {
            return error;
        }
    }

    private async getById(id: number) {
        const cliente = this.state.clientes.getById(id);
        if (cliente) {
            return cliente;
        }

        try {
            const res = await this.api.getById(id)
            return res;

        } catch (error) {
            this.voltarParaListagem();
        }
    }

    public async excluir(idCliente: number): Promise<void> {

        if (!await this.mensagemService.perguntaExclusao()) {
            return;
        }

        try {
            const response = await this.api.deletarCliente(idCliente).then((res) => {
                this.state.clientes.excluir(idCliente);
                this.getClientes();
            });
        } catch (error) {
            console.error(error);
        }
    }

    public async acessarRotaCadastro() {
        this.router.navigate([`cadastro/clientes/adicionar`]);
    }

    public acessarRotaEdicao(idCliente: number): void {
        this.router.navigate([`cadastro/clientes/${idCliente}/alterar`]);
    }

    public voltarParaListagem(): void {
        this.router.navigate(['cadastro/clientes']);
    }
}