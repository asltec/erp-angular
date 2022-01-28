import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produtos } from '../../models/produtos.model';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  @Input() produtos: Produtos[];
  @Output() editar = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();

  displayedColumns: string[] = ['id_produto', 'descricao', 'unidade', 'quantidade', 'valor_custo', 'valor_venda', 'acoes'];

  
  ngOnInit(): void {}
}
