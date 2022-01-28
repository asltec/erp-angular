import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';
import { ContasReceberListComponent } from './components/contas-receber-list/contas-receber-list.component';
import { ContasReceberFormComponent } from './containers/contas-receber-form/contas-receber-form.component';
import { ContasReceberListagemComponent } from './containers/contas-receber-listagem/contas-receber-listagem.component';
import { ContasReceberRoutingModule } from './contas-receber-routing.module';

@NgModule({
    declarations: [
    ContasReceberListComponent,
    ContasReceberListagemComponent,
    ContasReceberFormComponent],

    imports: [
        CommonModule,
        ReactiveFormsModule,
        ContasReceberRoutingModule,
        FormsModule,
        ScrollingModule,
        SharedModule,
        MaterialModule
       
    ]
})
export class ContasReceberModule {

}