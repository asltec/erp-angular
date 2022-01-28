import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContasReceber } from '../../models/contas-receber.model';

@Component({
  selector: 'app-contas-receber-list',
  templateUrl: './contas-receber-list.component.html',
  styleUrls: ['./contas-receber-list.component.css']
})
export class ContasReceberListComponent implements OnInit {

  @Input() contasReceber: ContasReceber[];
  @Output() editar = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();

  displayedColumns: string[] = ['id_conta_receber', 'data_lancamento', 'descricao', 'data_vencimento', 'valor_conta', 'status', 'acoes'];
  
  ngOnInit(): void {}

}
