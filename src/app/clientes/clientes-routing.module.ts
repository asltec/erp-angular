import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFormComponent } from './containers/clientes-form/clientes-form.component';
import { ClientesListagemComponent } from './containers/clientes-listagem/clientes-listagem.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'clientes'
            },
            {
                path:'clientes',
                component: ClientesListagemComponent,
                data: {
                    title: 'Clientes'
                }
            },
            {
                path:'clientes/adicionar',
                component: ClientesFormComponent
            },
            {
                path:'clientes/:id/alterar',
                component: ClientesFormComponent
            },
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
export class ClientesRountingModule{

}