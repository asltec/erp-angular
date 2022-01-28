import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { estados } from '../../../shared/models/estados.model';
import { FuncionariosFacade } from '../../funcionarios.facade';

@Component({
  selector: 'app-funcionarios-form',
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.css']
})
export class FuncionariosFormComponent implements OnInit {

  public funcionarioForm: FormGroup;
  public estados = estados;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private facade: FuncionariosFacade) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.preencheForm();
  }

  public get idRotaEditar$(): Observable<number> {
    return this.route.paramMap.pipe(map(params => +params.get('id')));
  }

  private iniciarForm() {

    this.funcionarioForm = this.formBuilder.group({

      nome: ['', [Validators.required]],
      cpf: [''],
      rg: [''],
      tipo: [''],
      sexo: [''],
      endereco: [''],
      numero: [''],
      bairro: [''],
      cep: [''],
      cidade: [''],
      uf: [''],
      celular: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      status: ['']
    });
  }

  private preencheForm() {
    this.facade.preencheForm(this.idRotaEditar$).subscribe(funcionario => {
      if (funcionario) {
        const { nome, tipo, sexo, cpf, rg, endereco, numero, bairro, cep, cidade, uf, celular, email, status } = funcionario;
        this.funcionarioForm.patchValue({ nome, tipo, sexo, cpf, rg, endereco, numero, bairro, cep, cidade, uf, celular, email, status })
      }
    })
  }

  onSubmit() {
    if (!this.funcionarioForm.valid) {
      return false;
    } else {
      this.facade.salvar(this.funcionarioForm.value, this.idRotaEditar$);
    }
  }

  public voltarListagem() {
    this.router.navigate(['cadastro/funcionarios'])
  }

}
