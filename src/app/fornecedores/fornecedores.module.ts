import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { FornecedoresRoutingModule } from './fornecedores-routing.module';
import { FornecedoresListComponent } from './components/fornecedores-list/fornecedores-list.component';
import { FornecedoresListagemComponent } from './containers/fornecedores-listagem/fornecedores-listagem.component';
import { FornecedoresFormComponent } from './containers/fornecedores-form/fornecedores-form.component';
import { FornecedorDetalhesComponent } from './components/fornecedor-detalhes/fornecedor-detalhes.component';

@NgModule({
    declarations:[
        FornecedoresListComponent, 
        FornecedoresListagemComponent, 
        FornecedoresFormComponent, 
        FornecedorDetalhesComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FornecedoresRoutingModule,
        FormsModule,
        ScrollingModule,
        SharedModule,
        MaterialModule
    ],
    entryComponents: [FornecedorDetalhesComponent],
})
export class FornecedoresModule {

}