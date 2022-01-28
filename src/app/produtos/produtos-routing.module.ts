import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFormComponent } from './containers/produto-form/produto-form.component';
import { ProdutosListagemComponent } from './containers/produtos-listagem/produtos-listagem.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'produtos'
            },
            {
                path:'produtos',
                component: ProdutosListagemComponent,
                data: {
                    title: 'Produtos'
                }
            },
            {
                path:'cadastro',
                component: ProdutoFormComponent
            },
            {
                path:':id/alterar',
                component: ProdutoFormComponent
            }
        ]
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class ProdutosRoutingModule {

}