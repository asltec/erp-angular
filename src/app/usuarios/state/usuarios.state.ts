import { Injectable } from '@angular/core';
import { StateCollection } from '../../helpers/state.collection';
import { StateDocument } from '../../helpers/state.documents';
import { Usuarios } from '../models/usuarios.model';

@Injectable({ providedIn: 'root' })
export class UsuariosState {

    public usuarios = new StateCollection<Usuarios>([]);   
    public carregando = new StateDocument<boolean>(true);


}