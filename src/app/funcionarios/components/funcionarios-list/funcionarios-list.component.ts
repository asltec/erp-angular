import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Funcionarios } from '../../models/funcionarios.model';

@Component({
  selector: 'app-funcionarios-list',
  templateUrl: './funcionarios-list.component.html',
  styleUrls: ['./funcionarios-list.component.css']
})
export class FuncionariosListComponent implements OnInit {

  @Input() funcionarios: Funcionarios[];
  @Output() editar = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();
  @Output() detalhes = new EventEmitter<number>();

  displayedColumns: string[] = ['id_funcionario', 'nome', 'cpf', 'status', 'acoes'];

  ngOnInit(): void {
  }

}
