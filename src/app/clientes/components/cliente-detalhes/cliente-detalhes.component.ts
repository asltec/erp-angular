import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientesService } from '../../../financeiro/contas-receber/services/cliente.service';
import { ClientesListagemComponent } from '../../containers/clientes-listagem/clientes-listagem.component';
import { Clientes } from '../../models/clientes.model';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.css']
})
export class ClienteDetalhesComponent implements OnInit {

  public id_cliente: number;
  public nome: string;
  public cnpj: string;
  public tipo: string;
  public endereco: string;
  public numero: string;
  public bairro: string;
  public cep: string;
  public cidade: string;
  public uf: string;
  public email: string;
  public telefone: string;
  public celular: string;
  public status: string;
  public cliente: Clientes;

  constructor(private clienteService: ClientesService,
    private dialogRef: MatDialogRef<ClientesListagemComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.id_cliente = data.id_cliente
  }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(cliente => {
      this.cliente = cliente.find(a => a.id_cliente == this.id_cliente);
      this.nome = this.cliente.nome;
      this.cnpj = this.cliente.cnpj;
      this.tipo = this.cliente.tipo;
      this.endereco = this.cliente.endereco;
      this.numero = this.cliente.numero;
      this.bairro = this.cliente.bairro;
      this.cep = this.cliente.cep;
      this.cidade = this.cliente.cidade;
      this.uf = this.cliente.uf;
      this.email = this.cliente.email;
      this.telefone = this.cliente.telefone;
      this.celular = this.cliente.celular;
      this.status = this.cliente.status;
    })
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
