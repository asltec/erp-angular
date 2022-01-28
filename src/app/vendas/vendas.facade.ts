import { Injectable } from '@angular/core';
import { VendasApi } from './api/vendas.api';
import { ProdutosService } from './service/produtos.service';
import { VendasState } from './state/vendas.state';

@Injectable({ providedIn: 'root' })
export class VendasFacade {


    constructor(private api: VendasApi,
        private state: VendasState,
        private produtosService: ProdutosService) { }

        public getProdutos(){
           return this.produtosService.getProdutos();
        }
}