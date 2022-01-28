import { Injectable } from '@angular/core';
import { StateCollection } from '../../helpers/state.collection';
import { StateDocument } from '../../helpers/state.documents';
import { Insumos } from '../models/insumos.model';

@Injectable({ providedIn: 'root' })
export class InsumosState {

    public insumos = new StateCollection<Insumos>([]);
    public carregando = new StateDocument<boolean>(true);


}