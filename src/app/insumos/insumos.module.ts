import { NgModule } from '@angular/core';
import { InsumosListComponent } from './components/insumos-list/insumos-list.component';
import { InsumosListagemComponent } from './containers/insumos-listagem/insumos-listagem.component';
import { InsumosFormComponent } from './containers/insumos-form/insumos-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { InsumosRoutingModule } from './insumos-routing.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
    declarations: [
        InsumosListComponent,
        InsumosListagemComponent,
        InsumosFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InsumosRoutingModule,
        FormsModule,
        ScrollingModule,
        SharedModule,
        MaterialModule

    ]
})
export class InsumosModule {

}