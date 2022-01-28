import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanoConta } from '../../models/plano-conta.model';

@Component({
  selector: 'app-plano-conta-list',
  templateUrl: './plano-conta-list.component.html',
  styleUrls: ['./plano-conta-list.component.css']
})
export class PlanoContaListComponent implements OnInit {

  @Input() planoConta: PlanoConta[];
  @Output() editar = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();

  displayedColumns: string[] = ['id_plano_conta', 'conta', 'descricao', 'acoes'];

  constructor() { }

  ngOnInit(): void {
  }

}
