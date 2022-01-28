import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FuncionariosListagemComponent } from '../../containers/funcionarios-listagem/funcionarios-listagem.component';
import { Funcionarios } from '../../models/funcionarios.model';
import { FuncionariosService } from '../../services/funcionarios.service';

@Component({
  selector: 'app-funcionario-detalhes',
  templateUrl: './funcionario-detalhes.component.html',
  styleUrls: ['./funcionario-detalhes.component.css']
})
export class FuncionarioDetalhesComponent implements OnInit {

  public id_funcionario: number;
  public nome: string;
  public cpf: string;
  public tipo: string;
  public sexo: string;
  public endereco: string;
  public numero: string;
  public bairro: string;
  public cep: string;
  public cidade: string;
  public uf: string;
  public email: string;
  public celular: string;
  public status: string;
  public funcionario: Funcionarios;

  constructor(private funcionarioService: FuncionariosService,
    private dialogRef: MatDialogRef<FuncionariosListagemComponent>, @Inject(MAT_DIALOG_DATA) data) {
      this.id_funcionario = data.id_funcionario;
    }

  ngOnInit(): void {
    this.getFuncionario();
  }

  private getFuncionario(){
    this.funcionarioService.getFuncionarios().subscribe(funcionario => {
      this.funcionario = funcionario.find(a => a.id_funcionario == this.id_funcionario);
      this.nome = this.funcionario.nome;
      this.cpf = this.funcionario.cpf;
      this.tipo = this.funcionario.tipo;
      this.sexo = this.funcionario.sexo;
      this.endereco = this.funcionario.endereco;
      this.numero = this.funcionario.numero;
      this.bairro = this.funcionario.bairro;
      this.cep = this.funcionario.cep;
      this.cidade = this.funcionario.cidade;
      this.uf = this.funcionario.uf;
      this.email = this.funcionario.email;
      this.celular = this.funcionario.celular;
      this.status = this.funcionario.status;
    })
  }

}
