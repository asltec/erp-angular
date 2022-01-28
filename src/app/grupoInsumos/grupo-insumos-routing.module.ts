import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoInsumosFormComponent } from './containers/grupo-insumos-form/grupo-insumos-form.component';
import { GrupoInsumosListagemComponent } from './containers/grupo-insumos-listagem/grupo-insumos-listagem.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'grupo-insumos'
            },
            {
                path: 'grupo-insumos',
                component: GrupoInsumosListagemComponent,
                data: {
                    title: 'Grupo Insumos'
                }
            },
            {
                path: 'grupo-insumos/adicionar',
                component: GrupoInsumosFormComponent
            },
            {
                path: 'grupo-insumos/:id/alterar',
                component: GrupoInsumosFormComponent
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
export class GrupoInsumosRoutingModule{

}