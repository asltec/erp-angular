import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosFormComponent } from './containers/funcionarios-form/funcionarios-form.component';
import { FuncionariosListagemComponent } from './containers/funcionarios-listagem/funcionarios-listagem.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'funcionarios'
            },
            {
                path:'funcionarios',
                component: FuncionariosListagemComponent,
                data: {
                    title: 'funcionarios'
                }
            },
            {
                path:'funcionarios/adicionar',
                component: FuncionariosFormComponent
            },
            {
                path:'funcionarios/:id/alterar',
                component: FuncionariosFormComponent
            },
            // {
            //     path:':id/detalhes',
            //     component: ClienteDetalheListagemComponent
            // }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[]
})
export class FuncionariosRountingModule{

}