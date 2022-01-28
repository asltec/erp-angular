import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuariosFacade } from '../../usuarios.facade';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  public usuarioForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private facade: UsuariosFacade) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.preencheForm();
  }

  public get idRotaEditar$(): Observable<number> {
    return this.route.paramMap.pipe(map(params => +params.get('id')));
  }

  private iniciarForm() {
    this.usuarioForm = this.formBuilder.group({
     nome: ['', [Validators.required]],
     email: ['', [Validators.required]],
     senha:['', [Validators.required]]
    })
  }

  private preencheForm() {
    this.facade.preencheForm(this.idRotaEditar$).subscribe(usuario => {
      if (usuario) {
        const { nome, email, senha } = usuario;
        this.usuarioForm.patchValue({ nome, email, senha })
      }
    })
  }

  onSubmit() {
    if (!this.usuarioForm.valid) {
      return false;
    } else {
      this.facade.salvar(this.usuarioForm.value, this.idRotaEditar$);
    }
  }

  public voltarListagem() {
    this.router.navigate(['cadastro/usuarios'])
  }


}
