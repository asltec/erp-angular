import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { FuncionariosRountingModule } from './funcionarios-routing.module';
import { FuncionariosListComponent } from './components/funcionarios-list/funcionarios-list.component';
import { FuncionariosListagemComponent } from './containers/funcionarios-listagem/funcionarios-listagem.component';
import { FuncionariosFormComponent } from './containers/funcionarios-form/funcionarios-form.component';
import { MaterialModule } from '../shared/material.module';
import { FuncionarioDetalhesComponent } from './components/funcionario-detalhes/funcionario-detalhes.component';

@NgModule({
    declarations: [
        FuncionariosListComponent, 
        FuncionariosListagemComponent, 
        FuncionariosFormComponent, 
        FuncionarioDetalhesComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FuncionariosRountingModule,
        FormsModule,
        ScrollingModule,
        SharedModule,
        MaterialModule
    ],
    entryComponents: [FuncionarioDetalhesComponent],
})
export class FuncionariosModule {

}