import { Component, OnInit } from '@angular/core';
import { ProdutosFacade } from '../../produtos.facade';

@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.component.html',
  styleUrls: ['./produtos-listagem.component.css']
})
export class ProdutosListagemComponent implements OnInit {

  constructor(public facade: ProdutosFacade) { }

  ngOnInit(): void {
    this.facade.getProdutos();
    
  }
}
