import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { MensagemService } from '../../services/mensagem.service';
import { PlanoContaApi } from './api/plano-conta.api';
import { PlanoConta } from './models/plano-conta.model';
import { PlanoContaState } from './state/plano-conta.state';


@Injectable({ providedIn: 'root' })
export class PlanoContaFacade {

    public planoConta$ = this.state.planoConta.collection$;
    public carregando$ = this.state.carregando.document$;
    public quantidadeRegistros$ = this.state.planoConta.quantidadeRegistros$;

    constructor(private state: PlanoContaState,
        private router: Router,
        private api: PlanoContaApi,
        private mensagemService: MensagemService) { }

        public getPlanoConta() {
            this.api.getAllPlanoConta().subscribe((res: PlanoConta[]) => {
                this.state.planoConta.collection = res;
            })
        }
    
        public preencheForm(idRotaEditar$: Observable<number>): Observable<PlanoConta | null> {
            return idRotaEditar$.pipe(
                switchMap(id => id ? this.getById(id) : of(null)),
                tap(() => this.state.carregando.document = false),
                take(1)
            );
        }
    
        public salvar(planoConta: PlanoConta, idRotaEditar$: Observable<number>): void {
            idRotaEditar$.pipe(
                take(1),
                tap(() => this.state.carregando.document = true),
                switchMap(id => id ? this.atualizar(id, planoConta) : this.cadastrar(planoConta)),
                tap(() => this.state.carregando.document = false))
                .subscribe(
                    _ => this.voltarParaListagem(),
                )
        }
    
        private cadastrar(planoConta: PlanoConta) {
    
            try {
                const res = this.api.SalvarPlanoConta(planoConta)
                this.state.planoConta.adicionar(planoConta);
                return res;
            } catch (error) {
                return error;
            }
        }
    
        private atualizar(idPlanoConta: number, planoConta: PlanoConta) {
            planoConta.id = idPlanoConta;
            try {
                const res = this.api.atualizarPlanoConta(idPlanoConta, planoConta)
                this.state.planoConta.alterar(planoConta);
                return res;
            } catch (error) {
                return error;
            }
        }
    
        private async getById(id: number) {
            const planoConta = this.state.planoConta.getById(id);
            if (planoConta) {
                return planoConta;
            }
    
            try {
                const res = await this.api.getById(id)
                return res;
    
            } catch (error) {
                this.voltarParaListagem();
            }
        }
    
        public async excluir(idPlanoConta: number): Promise<void> {
    
            if (!await this.mensagemService.perguntaExclusao()) {
                return;
            }
    
            try {
                const response = await this.api.deletarPlanoConta(idPlanoConta);
                this.state.planoConta.excluir(idPlanoConta);
                this.getPlanoConta();
    
            } catch (error) {
                console.error(error);
            }
        }
    
        public async acessarRotaCadastro() {
            this.router.navigate([`financeiro/plano-conta/adicionar`]);
        }
    
        public acessarRotaEdicao(idPlanoConta: number): void {
            this.router.navigate([`financeiro/plano-conta/${idPlanoConta}/alterar`]);
        }
    
        public voltarParaListagem(): void {
            this.router.navigate(['financeiro/plano-conta']);
        }

}