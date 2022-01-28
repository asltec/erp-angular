import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuarios } from '../../models/usuarios.model';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  @Input() usuarios: Usuarios;
  @Output() editar = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();

  displayedColumns: string[] = ['id_usuario', 'nome', 'email', 'acoes'];
 

  constructor() { }

  ngOnInit(): void {
  }

}
