import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioLoginApi } from '../../api/usuario-login.api';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  public loginUsuarioForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private api: UsuarioLoginApi,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm() {
    this.loginUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    })
  }

  onSubmit(): void {
    this.logar();
  }

  private logar() {
    this.api.login(this.loginUsuarioForm.value)
      .subscribe(
        res => this.router.navigate(['/dashboard']),
        err => {
          console.log(err);
          this.snackBar.open(err.console.erro.message, 'OK', { duration: 3000 })
        });
  }
}


