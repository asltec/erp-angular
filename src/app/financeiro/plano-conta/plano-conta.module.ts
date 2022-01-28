import { NgModule } from '@angular/core';
import { PlanoContaListComponent } from './components/plano-conta-list/plano-conta-list.component';
import { PlanoContaListagemComponent } from './containers/plano-conta-listagem/plano-conta-listagem.component';
import { PlanoContaFormComponent } from './containers/plano-conta-form/plano-conta-form.component';
import { PlanocontaRoutingModule } from './plano-conta-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';


@NgModule({
    declarations: [
        PlanoContaListComponent,
        PlanoContaListagemComponent,
        PlanoContaFormComponent],

    imports: [
        CommonModule,
        ReactiveFormsModule,
        PlanocontaRoutingModule,
        FormsModule,
        ScrollingModule,
        SharedModule,
        MaterialModule

    ]
})
export class PlanoContaModule {

}