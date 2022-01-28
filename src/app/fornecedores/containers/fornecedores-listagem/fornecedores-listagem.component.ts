import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FornecedorDetalhesComponent } from '../../components/fornecedor-detalhes/fornecedor-detalhes.component';
import { FornecedoresFacade } from '../../fornecedores.facade';

@Component({
  selector: 'app-fornecedores-listagem',
  templateUrl: './fornecedores-listagem.component.html',
  styleUrls: ['./fornecedores-listagem.component.css']
})
export class FornecedoresListagemComponent implements OnInit {

  public isModal: boolean = false;

  constructor(public facade: FornecedoresFacade,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.facade.getFornecedores();
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
      id_fornecedor: data.id_fornecedor
    };
    this.dialog.open(FornecedorDetalhesComponent, dialogConfig);
  }

}
