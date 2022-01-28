import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SaidaInsumos } from '../../models/saida-insumos.model';

@Component({
  selector: 'app-saida-insumos-list',
  templateUrl: './saida-insumos-list.component.html',
  styleUrls: ['./saida-insumos-list.component.css']
})
export class SaidaInsumosListComponent implements OnInit {

  @Input() saidaInsumos: SaidaInsumos[]; 
  @Output() editar = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();

  displayedColumns: string[] = ['id_saida_insumo', 'quantidade', 'data_saida', 'valor_unitario', 'acoes'];

  ngOnInit(): void {
  }

}
