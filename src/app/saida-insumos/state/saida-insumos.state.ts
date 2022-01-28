import { Injectable } from '@angular/core';
import { StateCollection } from '../../helpers/state.collection';
import { StateDocument } from '../../helpers/state.documents';
import { SaidaInsumos } from '../models/saida-insumos.model';

@Injectable({ providedIn: 'root' })
export class SaidaInsumosState {


    public saidaInsumos = new StateCollection<SaidaInsumos>([]);
    public carregando = new StateDocument<boolean>(true);

}