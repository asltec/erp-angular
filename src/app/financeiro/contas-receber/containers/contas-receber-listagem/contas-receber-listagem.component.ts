import { Component, OnInit } from '@angular/core';
import { ContasReceberFacade } from '../../contas-receber.facade';

@Component({
  selector: 'app-contas-receber-listagem',
  templateUrl: './contas-receber-listagem.component.html',
  styleUrls: ['./contas-receber-listagem.component.css']
})
export class ContasReceberListagemComponent implements OnInit {

  constructor(public facade:ContasReceberFacade) { }

  ngOnInit(): void {
    this.facade.getContasReceber();
  }

}
