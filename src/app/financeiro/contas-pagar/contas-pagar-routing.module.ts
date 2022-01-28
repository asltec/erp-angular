import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContasPagarFormComponent } from './containers/contas-pagar-form/contas-pagar-form.component';
import { ContasPagarListagemComponent } from './containers/contas-pagar-listagem/contas-pagar-listagem.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'contas-pagar'
            },
            {
                path: 'contas-pagar',
                component: ContasPagarListagemComponent,
                data: {
                    title: 'Contas à Pagar'
                }
            },
            {
                path: 'contas-pagar/adicionar',
                component: ContasPagarFormComponent
            },
            {
                path: 'contas-pagar/:id/alterar',
                component: ContasPagarFormComponent
            }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ContasPagarRountingModule {

}