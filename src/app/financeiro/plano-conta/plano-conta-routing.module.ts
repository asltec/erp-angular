import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanoContaFormComponent } from './containers/plano-conta-form/plano-conta-form.component';
import { PlanoContaListagemComponent } from './containers/plano-conta-listagem/plano-conta-listagem.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'plano-conta'
            },
            {
                path: 'plano-conta',
                component: PlanoContaListagemComponent,
                data: {
                    title: 'Plano de Contas'
                }
            },
            {
                path: 'plano-conta/adicionar',
                component: PlanoContaFormComponent
            },
            {
                path: 'plano-conta/:id/alterar',
                component: PlanoContaFormComponent
            }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class PlanocontaRoutingModule{

}