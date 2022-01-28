import { Injectable } from '@angular/core';
import { StateCollection } from '../../helpers/state.collection';
import { StateDocument } from '../../helpers/state.documents';
import { Clientes } from '../models/clientes.model';

@Injectable({ providedIn: 'root' })
export class ClientesState {

    public clientes = new StateCollection<Clientes>([]);
    public carregando = new StateDocument<boolean>(true);

}