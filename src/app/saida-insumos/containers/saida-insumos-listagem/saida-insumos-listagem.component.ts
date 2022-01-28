import { Component, OnInit } from '@angular/core';
import { SaidaInsumosFacade } from '../../saida-insumos.facade';

@Component({
  selector: 'app-saida-insumos-listagem',
  templateUrl: './saida-insumos-listagem.component.html',
  styleUrls: ['./saida-insumos-listagem.component.css']
})
export class SaidaInsumosListagemComponent implements OnInit {

  constructor(public facade: SaidaInsumosFacade) { }

  ngOnInit(): void {
    this.facade.getSaidaInsumos();
  }

}
