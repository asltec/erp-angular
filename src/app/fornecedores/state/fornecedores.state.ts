import { Injectable } from '@angular/core';
import { StateCollection } from '../../helpers/state.collection';
import { StateDocument } from '../../helpers/state.documents';
import { Fornecedores } from '../models/fornecedores.model';

@Injectable({ providedIn: 'root' })
export class FornecedoresState {

    public fornecedores = new StateCollection<Fornecedores>([]);
    public carregando = new StateDocument<boolean>(true);

}