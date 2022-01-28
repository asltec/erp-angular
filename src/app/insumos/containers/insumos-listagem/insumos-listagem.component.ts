import { Component, OnInit } from '@angular/core';
import { InsumosFacade } from '../../insumos.facade';

@Component({
  selector: 'app-insumos-listagem',
  templateUrl: './insumos-listagem.component.html',
  styleUrls: ['./insumos-listagem.component.css']
})
export class InsumosListagemComponent implements OnInit {

  constructor(public facade: InsumosFacade) { }

  ngOnInit(): void {
    this.facade.getInsumos();
  }
}
