import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fornecedores } from '../../models/fornecedores.model';

@Component({
  selector: 'app-fornecedores-list',
  templateUrl: './fornecedores-list.component.html',
  styleUrls: ['./fornecedores-list.component.css']
})
export class FornecedoresListComponent implements OnInit {

  @Input() fornecedores: Fornecedores[];
  @Output() editar = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();
  @Output() detalhes = new EventEmitter<number>();

  displayedColumns: string[] = ['id_fornecedor', 'nome', 'cnpj', 'status', 'acoes'];

  ngOnInit(): void {
  }

}
