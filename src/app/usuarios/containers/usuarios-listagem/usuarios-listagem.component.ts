import { Component, OnInit } from '@angular/core';
import { UsuariosFacade } from '../../usuarios.facade';

@Component({
  selector: 'app-usuarios-listagem',
  templateUrl: './usuarios-listagem.component.html',
  styleUrls: ['./usuarios-listagem.component.css']
})
export class UsuariosListagemComponent implements OnInit {

  constructor(public facade: UsuariosFacade) { }

  ngOnInit(): void {
    this.facade.getUsuarios();
  }

}
