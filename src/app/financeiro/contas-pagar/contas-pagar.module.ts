import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';
import { ContasPagarListComponent } from './components/contas-pagar-list/contas-pagar-list.component';
import { ContasPagarFormComponent } from './containers/contas-pagar-form/contas-pagar-form.component';
import { ContasPagarListagemComponent } from './containers/contas-pagar-listagem/contas-pagar-listagem.component';
import { ContasPagarRountingModule } from './contas-pagar-routing.module';




@NgModule({
    declarations: [
        ContasPagarListComponent,
        ContasPagarListagemComponent,
        ContasPagarFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ContasPagarRountingModule,
        FormsModule,
        ScrollingModule,
        SharedModule,
        MaterialModule
    ]
})
export class ContasPagarModule {

}