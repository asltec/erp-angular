import { Injectable } from '@angular/core';
import { StateCollection } from '../../../helpers/state.collection';
import { StateDocument } from '../../../helpers/state.documents';
import { PlanoConta } from '../models/plano-conta.model';


@Injectable({providedIn: 'root'})
export class PlanoContaState {

    public planoConta = new StateCollection<PlanoConta>([]);
    public carregando = new StateDocument<boolean>(true);

}