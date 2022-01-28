
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaidaInsumosFormComponent } from './containers/saida-insumos-form/saida-insumos-form.component';
import { SaidaInsumosListagemComponent } from './containers/saida-insumos-listagem/saida-insumos-listagem.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'saida-insumos'
            },
            {
                path: 'saida-insumos',
                component: SaidaInsumosListagemComponent,
                data: {
                    title: 'Saída de Insumos'
                }
            },
            {
                path: 'saida-insumos/adicionar',
                component: SaidaInsumosFormComponent
            },
            {
                path: 'saida-insumos/:id/alterar',
                component: SaidaInsumosFormComponent
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
export class SaidaInsumosRoutingModule{

}