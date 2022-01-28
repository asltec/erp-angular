import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasFormComponent } from './containers/vendas-form/vendas-form.component';
import { VendasListagemComponent } from './containers/vendas-listagem/vendas-listagem.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'produtos'
            },
            {
                path: 'produtos',
                component: VendasListagemComponent,
                data: {
                    title: 'produtos'
                }
            },
            {
                path: 'produtos/adicionar',
                component: VendasFormComponent
            },
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
export class VendasRoutingModule{

}