import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { GrupoInsumosListComponent } from './components/grupo-insumos-list/grupo-insumos-list.component';
import { GrupoInsumosFormComponent } from './containers/grupo-insumos-form/grupo-insumos-form.component';
import { GrupoInsumosListagemComponent } from './containers/grupo-insumos-listagem/grupo-insumos-listagem.component';
import { GrupoInsumosRoutingModule } from './grupo-insumos-routing.module';

@NgModule({
    declarations:[
    GrupoInsumosListComponent,
    GrupoInsumosListagemComponent,
    GrupoInsumosFormComponent],
    
    imports:[
        CommonModule,
        ReactiveFormsModule,
        GrupoInsumosRoutingModule,
        FormsModule,
        ScrollingModule,
        SharedModule,
        MaterialModule
    ]
})
export class GrupoInsumosModule{

}