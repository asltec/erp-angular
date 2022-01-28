import { ResponseApi } from '../../../helpers/response.api';

export interface PlanoConta {
    id: number;
    conta: string;
    descricao: string;
}

export interface PlanosConta extends ResponseApi {
    planoConta: PlanoConta[];
}

export interface PlanoConta extends ResponseApi {
    planoConta: PlanoConta;
}