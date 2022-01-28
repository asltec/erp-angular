import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { SaidaInsumosListComponent } from './components/saida-insumos-list/saida-insumos-list.component';
import { SaidaInsumosFormComponent } from './containers/saida-insumos-form/saida-insumos-form.component';
import { SaidaInsumosListagemComponent } from './containers/saida-insumos-listagem/saida-insumos-listagem.component';
import { SaidaInsumosRoutingModule } from './saida-insumos-routing.module';

@NgModule({
    declarations: [
        SaidaInsumosListComponent, 
        SaidaInsumosListagemComponent, 
        SaidaInsumosFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SaidaInsumosRoutingModule,
        FormsModule,
        SharedModule,
        MaterialModule

    ],

})
export class SaidaInsumosModule {

}