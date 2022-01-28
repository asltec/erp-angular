import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedoresFormComponent } from './containers/fornecedores-form/fornecedores-form.component';
import { FornecedoresListagemComponent } from './containers/fornecedores-listagem/fornecedores-listagem.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'fornecedores'
            },
            {
                path: 'fornecedores',
                component: FornecedoresListagemComponent,
                data: {
                    title: 'Fornecedores'
                }
            },
            {
                path: 'fornecedores/adicionar',
                component: FornecedoresFormComponent
            },
            {
                path: 'fornecedores/:id/alterar',
                component: FornecedoresFormComponent
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
export class FornecedoresRoutingModule {

}