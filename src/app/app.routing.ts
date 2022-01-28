import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import Containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { RegisterComponent } from './views/register/register.component';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'estoque',
        loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
      },
      {
        path: 'estoque',
        loadChildren: () => import('./insumos/insumos.module').then(m => m.InsumosModule)
      },
      {
        path: 'estoque',
        loadChildren: () => import('./grupoInsumos/grupo-insumos.module').then(m => m.GrupoInsumosModule)
      },
      {
        path: 'estoque',
        loadChildren: () => import('./saida-insumos/saida-insumos.module').then(m => m.SaidaInsumosModule)
      },
      {
        path: 'cadastro',
        loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
      },
      {
        path: 'cadastro',
        loadChildren: () => import('./funcionarios/funcionarios.module').then(m => m.FuncionariosModule)
      },
      {
        path: 'cadastro',
        loadChildren: () => import('./fornecedores/fornecedores.module').then(m => m.FornecedoresModule)
      },
      {
        path: 'cadastro',
        loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
      },
      {
        path: 'financeiro',
        loadChildren: () => import('./financeiro/contas-pagar/contas-pagar.module').then(m => m.ContasPagarModule)
      }, {
        path: 'financeiro',
        loadChildren: () => import('./financeiro/contas-receber/contas-receber.module').then(m => m.ContasReceberModule)
      },
      {
        path: 'financeiro',
        loadChildren: () => import('./financeiro/plano-conta/plano-conta.module').then(m => m.PlanoContaModule)
      },
      {
        path: 'vendas',
        loadChildren: () => import('./vendas/vendas.module').then(m => m.VendasModule)
      },

      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./usuario-login/usuario-login.module').then(m => m.UsuarioLoginModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
