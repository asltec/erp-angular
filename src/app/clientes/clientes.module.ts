import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ClientesRountingModule } from './clientes-routing.module';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';
import { ClientesFormComponent } from './containers/clientes-form/clientes-form.component';
import { ClientesListagemComponent } from './containers/clientes-listagem/clientes-listagem.component';
import { ClienteDetalhesComponent } from './components/cliente-detalhes/cliente-detalhes.component';

@NgModule({
    declarations: [
        ClientesListComponent,
        ClientesFormComponent,
        ClientesListagemComponent,
        ClienteDetalhesComponent,
        
    ],

    imports: [
        CommonModule,
        ReactiveFormsModule,
        ClientesRountingModule,
        FormsModule,
        ScrollingModule,
        SharedModule,
        MaterialModule
    ],
    entryComponents: [ClienteDetalhesComponent],
   
})
export class ClientesModule {

}