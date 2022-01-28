import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { estados } from '../../../shared/models/estados.model';
import { FornecedoresFacade } from '../../fornecedores.facade';

@Component({
  selector: 'app-fornecedores-form',
  templateUrl: './fornecedores-form.component.html',
  styleUrls: ['./fornecedores-form.component.css']
})
export class FornecedoresFormComponent implements OnInit {

  public fornecedoresForm: FormGroup;
  public estados = estados;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private facade: FornecedoresFacade) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.preencheForm();
  }

  public get idRotaEditar$(): Observable<number> {
    return this.route.paramMap.pipe(map(params => +params.get('id')));
  }

  private iniciarForm() {

    this.fornecedoresForm = this.formBuilder.group({

      nome: [''],
      cnpj: [''],
      endereco: [''],
      numero: [''],
      bairro: [''],
      cep: [''],
      cidade: [''],
      uf: [''],
      telefone: [''],
      celular: [''],
      email: [''],
      status: ['']
    });
  }

  private preencheForm() {
    this.facade.preencheForm(this.idRotaEditar$).subscribe(fornecedor => {
      if (fornecedor) {
        const { nome, cnpj, endereco, numero, bairro, cep, cidade, uf, telefone, celular, email, status } = fornecedor;
        this.fornecedoresForm.patchValue({ nome, cnpj, endereco, numero, bairro, cep, cidade, uf, telefone, celular, email, status })
      }
    })
  }

  onSubmit() {
    if (!this.fornecedoresForm.valid) {
      return false;
    } else {
      this.facade.salvar(this.fornecedoresForm.value, this.idRotaEditar$);
    }
  }

  public voltarListagem() {
    this.router.navigate(['cadastro/fornecedores'])
  }

}
