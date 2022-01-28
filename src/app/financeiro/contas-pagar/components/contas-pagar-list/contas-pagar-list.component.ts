import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContasPagar } from '../../models/contas-pagar.model';

@Component({
  selector: 'app-contas-pagar-list',
  templateUrl: './contas-pagar-list.component.html',
  styleUrls: ['./contas-pagar-list.component.css']
})
export class ContasPagarListComponent implements OnInit {

  @Input() contasPagar: ContasPagar[];
  @Output() editar = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();
  
  displayedColumns: string[] = ['id_conta_pagar', 'descricao', 'ocorrencia', 'valor_conta', 'data_vencimento','acoes'];

  constructor() { }

  ngOnInit(): void {
  }

}
