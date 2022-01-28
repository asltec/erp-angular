import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContasReceberFormComponent } from './containers/contas-receber-form/contas-receber-form.component';
import { ContasReceberListagemComponent } from './containers/contas-receber-listagem/contas-receber-listagem.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'contas-receber'
            },
            {
                path: 'contas-receber',
                component: ContasReceberListagemComponent,
                data: {
                    title: 'Contas à Receber'
                }
            },
            {
                path: 'contas-receber/adicionar',
                component: ContasReceberFormComponent
            },
            {
                path: 'contas-receber/:id/alterar',
                component: ContasReceberFormComponent
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
export class ContasReceberRoutingModule {

}