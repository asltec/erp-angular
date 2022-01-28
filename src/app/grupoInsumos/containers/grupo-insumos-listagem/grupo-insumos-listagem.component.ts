import { Component, OnInit } from '@angular/core';
import { GrupoInsumosFacade } from '../../grupo-insumos.facade';

@Component({
  selector: 'app-grupo-insumos-listagem',
  templateUrl: './grupo-insumos-listagem.component.html',
  styleUrls: ['./grupo-insumos-listagem.component.css']
})
export class GrupoInsumosListagemComponent implements OnInit {

  constructor(public facade: GrupoInsumosFacade) { }

  ngOnInit(): void {
    this.facade.getGrupoInsumos();
  }

}
