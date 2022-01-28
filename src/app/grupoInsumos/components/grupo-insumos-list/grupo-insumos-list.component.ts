import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GrupoInsumos } from '../../models/grupo-insumos.model';

@Component({
  selector: 'app-grupo-insumos-list',
  templateUrl: './grupo-insumos-list.component.html',
  styleUrls: ['./grupo-insumos-list.component.css']
})
export class GrupoInsumosListComponent implements OnInit {

  @Input() grupoInsumos: GrupoInsumos[];
  @Output() editar = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();

  displayedColumns: string[] = ['id_grupo_insumo', 'descricao', 'status', 'acoes'];


  ngOnInit(): void {
  }

}
