import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FornecedoresListagemComponent } from '../../containers/fornecedores-listagem/fornecedores-listagem.component';
import { Fornecedores } from '../../models/fornecedores.model';
import { FornecedoresService } from '../../services/fornecedores.services';

@Component({
  selector: 'app-fornecedor-detalhes',
  templateUrl: './fornecedor-detalhes.component.html',
  styleUrls: ['./fornecedor-detalhes.component.css']
})
export class FornecedorDetalhesComponent implements OnInit {

  public id_fornecedor: number;
  public nome: string;
  public cnpj: string;
  public endereco: string;
  public numero: string;
  public bairro: string;
  public cep: string;
  public cidade: string;
  public uf: string;
  public telefone: string;
  public celular: string;
  public email: string;
  public status: string;
  public fornecedor: Fornecedores;

  constructor(private fornecedoresService: FornecedoresService,
    private dialogRef: MatDialogRef<FornecedoresListagemComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.id_fornecedor = data.id_fornecedor;
    
  }

  ngOnInit(): void {
    this.getFornecedor();
  }

  private getFornecedor() {
    this.fornecedoresService.getFornecedores().subscribe(fornecedor => {
      this.fornecedor = fornecedor.find(a => a.id_fornecedor == this.id_fornecedor);
      this.nome = this.fornecedor.nome;
      this.cnpj = this.fornecedor.cnpj;
      this.endereco = this.fornecedor.endereco;
      this.numero = this.fornecedor.numero;
      this.bairro = this.fornecedor.bairro;
      this.cep = this.fornecedor.cep;
      this.cidade = this.fornecedor.cidade;
      this.uf = this.fornecedor.uf;
      this.telefone = this.fornecedor.telefone;
      this.celular = this.fornecedor.celular;
      this.email = this.fornecedor.email;
      this.status = this.fornecedor.status;
    })
  }

}
