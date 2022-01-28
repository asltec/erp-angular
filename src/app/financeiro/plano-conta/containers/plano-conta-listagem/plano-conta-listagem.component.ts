import { Component, OnInit } from '@angular/core';
import { PlanoContaFacade } from '../../plano-conta.facade';

@Component({
  selector: 'app-plano-conta-listagem',
  templateUrl: './plano-conta-listagem.component.html',
  styleUrls: ['./plano-conta-listagem.component.css']
})
export class PlanoContaListagemComponent implements OnInit {

  constructor(public facade: PlanoContaFacade) { }

  ngOnInit(): void {
    this.facade.getPlanoConta();
  }

}
