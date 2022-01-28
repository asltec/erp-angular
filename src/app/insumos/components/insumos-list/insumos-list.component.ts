import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Insumos } from '../../models/insumos.model';

@Component({
  selector: 'app-insumos-list',
  templateUrl: './insumos-list.component.html',
  styleUrls: ['./insumos-list.component.css']
})
export class InsumosListComponent implements OnInit {

  @Input() insumos: Insumos[];
  @Output() editar = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();

  displayedColumns: string[] = ['id_insumo', 'descricao', 'quantidade', 'valor_unitario', 'status', 'acoes'];

  ngOnInit(): void {}

}
