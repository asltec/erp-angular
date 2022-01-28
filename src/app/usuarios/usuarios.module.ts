import { NgModule } from '@angular/core';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { UsuariosListagemComponent } from './containers/usuarios-listagem/usuarios-listagem.component';
import { UsuariosFormComponent } from './containers/usuarios-form/usuarios-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations:[
        UsuariosListComponent, 
        UsuariosListagemComponent, 
        UsuariosFormComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        UsuariosRoutingModule,
        FormsModule,
        MaterialModule,
        SharedModule
    ]
})
export class UsuariosModule{

}