import { Injectable } from '@angular/core';
import { StateCollection } from '../../../helpers/state.collection';
import { StateDocument } from '../../../helpers/state.documents';
import { ContasPagar } from '../models/contas-pagar.model';

@Injectable({ providedIn: 'root' })
export class ContasPagarState {

    public contasPagar = new StateCollection<ContasPagar>([]);   
    public carregando = new StateDocument<boolean>(true);

}