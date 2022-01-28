import { Injectable } from '@angular/core';
import { StateCollection } from '../../../helpers/state.collection';
import { StateDocument } from '../../../helpers/state.documents';
import { ContasReceber } from '../models/contas-receber.model';

@Injectable({ providedIn: 'root' })
export class ContasReceberState {

    public contasReceber = new StateCollection<ContasReceber>([]);       
    public carregando = new StateDocument<boolean>(true);

}