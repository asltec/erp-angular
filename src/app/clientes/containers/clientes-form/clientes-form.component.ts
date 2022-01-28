import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { estados } from '../../../shared/models/estados.model';
import { ClientesFacade } from '../../clientes.facade';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  public clienteForm: FormGroup;
  public estados = estados;
  public isPessoaFisica = true;
  public isPessoaJuridica = false;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private facade: ClientesFacade) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.preencheForm();
    this.getTipo();

  }

  public get idRotaEditar$(): Observable<number> {
    return this.route.paramMap.pipe(map(params => +params.get('id')));
  }

  private iniciarForm() {

    this.clienteForm = this.formBuilder.group({

      nome: ['', [Validators.required]],
      tipo: [''],
      cpf: [''],
      cnpj: [''],
      endereco: [''],
      numero: [''],
      bairro: [''],
      cep: [''],
      cidade: [''],
      uf: [''],
      telefone: [''],
      celular: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      status: ['']
    });
  }

  private preencheForm() {
    this.facade.preencheForm(this.idRotaEditar$).subscribe(cliente => {
      if (cliente) {
        const { nome, tipo, cpf, cnpj, endereco, bairro, cep, cidade, uf, telefone, celular, email, status } = cliente;
        this.clienteForm.patchValue({ nome, tipo, cpf, cnpj, endereco, bairro, cep, cidade, uf, telefone, celular, email, status })
      } else {
        this.getTipo();
      }
    })
  }

  private getTipo() {

    this.clienteForm.get('tipo').valueChanges.subscribe(tipo => {
     
      if(tipo == 'Juridica'){
        this.isPessoaFisica = false;
        this.isPessoaJuridica = true;
      }

      if(tipo == 'Fisica') {
        this.isPessoaJuridica = false;
        this.isPessoaFisica = true;
      }

    });
  }

  onSubmit() {
    if (!this.clienteForm.valid) {
      return false;
    } else {
      this.facade.salvar(this.clienteForm.value, this.idRotaEditar$);
    }
  }

  public voltarListagem() {
    this.router.navigate(['cadastro/clientes'])
  }

}
