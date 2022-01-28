import { Component, OnInit } from '@angular/core';
import { ContasPagarFacade } from '../../contas-pagar.facade';

@Component({
  selector: 'app-contas-pagar-listagem',
  templateUrl: './contas-pagar-listagem.component.html',
  styleUrls: ['./contas-pagar-listagem.component.css']
})
export class ContasPagarListagemComponent implements OnInit {

  constructor(public facade: ContasPagarFacade) { }

  ngOnInit(): void {
    this.facade.getContasPagar();
  }

}
