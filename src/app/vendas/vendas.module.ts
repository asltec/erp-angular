import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { VendasListComponent } from './components/vendas-list/vendas-list.component';
import { VendasFormComponent } from './containers/vendas-form/vendas-form.component';
import { VendasListagemComponent } from './containers/vendas-listagem/vendas-listagem.component';
import { VendasRoutingModule } from './vendas-routing.module';
import {TableModule} from 'primeng/table';
import { ProdutosListComponent } from './components/produtos-list/produtos-list.component';
import { ListaProdutosDirective } from './directives/lista-produtos.directive';

@NgModule({
    declarations: [
    VendasListComponent,
    VendasFormComponent,
    VendasListagemComponent,
    ProdutosListComponent,
    ListaProdutosDirective

],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VendasRoutingModule,
        FormsModule,
        SharedModule,
        MaterialModule,
        TableModule
    ]
})
export class VendasModule {

}