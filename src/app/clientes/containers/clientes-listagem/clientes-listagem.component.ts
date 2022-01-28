import { Component, OnInit } from '@angular/core';
import { ClientesFacade } from '../../clientes.facade';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ClienteDetalhesComponent } from '../../components/cliente-detalhes/cliente-detalhes.component';


@Component({
  selector: 'app-clientes-listagem',
  templateUrl: './clientes-listagem.component.html',
  styleUrls: ['./clientes-listagem.component.css']
})
export class ClientesListagemComponent implements OnInit {

  public isModal: boolean = false;


  constructor(public facade: ClientesFacade,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.facade.getClientes();
  }

  openDialog(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      'top': '100px',
      'left': '500px'
    };
    dialogConfig.width = '500px';
    dialogConfig.height = '500px';
    dialogConfig.data = {
      id_cliente: data.id_cliente
    };
    this.dialog.open(ClienteDetalhesComponent, dialogConfig);
  }
}
