import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "primeng/api";
import { MaterialModule } from "../shared/material.module";
import { UsuarioLoginComponent } from "./component/usuario-login/usuario-login.component";

const rotas: Routes = [{
    path: '',
    component: UsuarioLoginComponent

}];

@NgModule({
    declarations: [
        UsuarioLoginComponent
    ],

    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        SharedModule,
        RouterModule.forChild(rotas)
    ]
})
export class UsuarioLoginModule {

}