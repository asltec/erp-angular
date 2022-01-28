import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
   
  },

  {
    title: true,
    name: 'Menu'
  },
  {
    divider: true
  },

  {
    name: 'Estoque/Insumos',
    url: '/estoque',
    icon: 'fa fa-cubes',
    children: [
      {
        name: 'Produtos',
        url: '/estoque/produtos',
        icon: 'fa fa-cube'
      },
      {
        name: 'Grupo de Insumos',
        url: '/estoque/grupo-insumos',
        icon: 'fa fa-cube'
      },{
        name: 'Entrada de Insumos',
        url: '/estoque/insumos',
        icon: 'fa fa-cube'
      },{
        name: 'Saída de Insumos',
        url: '/estoque/saida-insumos',
        icon: 'fa fa-cube'
      },
    ]
  },

  {
    name: 'Cadastros',
    url: '/cadastro',
    icon: 'fa fa-users',
    children: [
      {
        name: 'Clientes',
        url: '/cadastro/clientes',
        icon: 'fa fa-user'
      },{
        name: 'Funcionarios',
        url: '/cadastro/funcionarios',
        icon: 'fa fa-user'
      },{
        name: 'Fornecedores',
        url: '/cadastro/fornecedores',
        icon: 'fa fa-user'
      },{
        name: 'Usuários',
        url: '/cadastro/usuarios',
        icon: 'fa fa-user'
      },]
  },

  {
    name: 'Financeiro',
    url: '/financeiro',
    icon: 'fa fa-university',
    children: [
      {
        name: 'Contas à Pagar',
        url: '/financeiro/contas-pagar',
        icon: 'fa fa-usd'
      },
      {
        name: 'Contas à Receber',
        url: '/financeiro/contas-receber',
        icon: 'fa fa-money'
      },
      {
        name: 'Plano de Contas',
        url: '/financeiro/plano-conta',
        icon: 'fa fa-sitemap'
      },
    ]
  },

  {
    name: 'Vendas',
    url: '/vendas',
    icon: 'fa fa-opencart ',
    children: [
      {
        name: 'Produtos',
        url: '/vendas/produtos',
        icon: 'fa fa-pencil-square-o'
      },
    ]
  },
];
