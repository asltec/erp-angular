import { Injectable } from '@angular/core';
import { StateCollection } from '../../helpers/state.collection';
import { StateDocument } from '../../helpers/state.documents';
import { Produtos } from '../models/produtos.model';

@Injectable({ providedIn: 'root' })
export class ProdutosState {

    public produtos = new StateCollection<Produtos>([]);
    public carregando = new StateDocument<boolean>(true);
}