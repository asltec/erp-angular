import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ProdutosListComponent } from './components/produtos-list/produtos-list.component';
import { ProdutoFormComponent } from './containers/produto-form/produto-form.component';
import { ProdutosListagemComponent } from './containers/produtos-listagem/produtos-listagem.component';
import { ProdutosRoutingModule } from './produtos-routing.module';

@NgModule({
    declarations: [
        ProdutosListComponent,
        ProdutosListagemComponent,
        ProdutoFormComponent
    ],
    imports: [
        CommonModule,
        ProdutosRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ScrollingModule,
        SharedModule,
        MaterialModule,
      
    ]
})
export class ProdutosModule {

}