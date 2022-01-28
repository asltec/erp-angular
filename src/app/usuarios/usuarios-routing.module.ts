import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosFormComponent } from './containers/usuarios-form/usuarios-form.component';
import { UsuariosListagemComponent } from './containers/usuarios-listagem/usuarios-listagem.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'usuarios'
            },
            {
                path:'usuarios',
                component: UsuariosListagemComponent,
                data: {
                    title: 'Usuários'
                }
            },
            {
                path:'usuarios/adicionar',
                component: UsuariosFormComponent
            },
            {
                path:'usuarios/:id/alterar',
                component: UsuariosFormComponent
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
export class UsuariosRoutingModule{

}