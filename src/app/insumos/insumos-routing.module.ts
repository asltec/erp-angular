import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsumosFormComponent } from './containers/insumos-form/insumos-form.component';
import { InsumosListagemComponent } from './containers/insumos-listagem/insumos-listagem.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'insumos'
            },
            {
                path:'insumos',
                component: InsumosListagemComponent,
                data: {
                    title: 'insumos'
                }
            },
            {
                path:'insumos/adicionar',
                component: InsumosFormComponent
            },
            {
                path:'insumos/:id/alterar',
                component: InsumosFormComponent
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
export class InsumosRoutingModule {

}