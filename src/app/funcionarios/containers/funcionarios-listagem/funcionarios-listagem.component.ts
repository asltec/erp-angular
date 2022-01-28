import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FuncionarioDetalhesComponent } from '../../components/funcionario-detalhes/funcionario-detalhes.component';
import { FuncionariosFacade } from '../../funcionarios.facade';

@Component({
  selector: 'app-funcionarios-listagem',
  templateUrl: './funcionarios-listagem.component.html',
  styleUrls: ['./funcionarios-listagem.component.css']
})
export class FuncionariosListagemComponent implements OnInit {

  public isModal: boolean = false;

  constructor(public facade: FuncionariosFacade,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.facade.getFuncionarios();
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
      id_funcionario: data.id_funcionario
    };
    this.dialog.open(FuncionarioDetalhesComponent, dialogConfig);
  }

}
