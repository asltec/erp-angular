import { Injectable } from '@angular/core';
import { StateCollection } from '../../helpers/state.collection';
import { StateDocument } from '../../helpers/state.documents';
import { Funcionarios } from '../models/funcionarios.model';

@Injectable({ providedIn: 'root' })
export class FuncionariosState {

    public funcionarios = new StateCollection<Funcionarios>([]);
    public carregando = new StateDocument<boolean>(true);

}