import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../models/clientes.model';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  @Input() clientes: Clientes[];
  @Output() editar = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();
  @Output() detalhes = new EventEmitter<number>();

  displayedColumns: string[] = ['id_cliente', 'nome', 'cnpj', 'status', 'acoes'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
