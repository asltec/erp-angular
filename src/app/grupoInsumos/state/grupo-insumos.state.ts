import { Injectable } from '@angular/core';
import { StateCollection } from '../../helpers/state.collection';
import { StateDocument } from '../../helpers/state.documents';
import { GrupoInsumos } from '../models/grupo-insumos.model';

@Injectable({ providedIn: 'root' })
export class GrupoInsumosState {

    public grupoInsumos = new StateCollection<GrupoInsumos>([]);
    public carregando = new StateDocument<boolean>(true);

}