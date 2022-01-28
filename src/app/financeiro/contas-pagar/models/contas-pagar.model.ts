import { ResponseApi } from '../../../helpers/response.api';

export interface ContasPagar {
    id: number;
    id_conta_pagar: number;
    descricao: string;
    ocorrencia: string;
    id_plano_conta: string;
    forma_pagamento: string;
    valor_conta: string;
    data_lancamento: string;
    data_vencimento: string;
    pagamento: string;
    observacao: string;
}

export interface ContasPagarResponse extends ResponseApi {
    contasPagar: ContasPagar[];
}

export interface ContaPagarResponse extends ResponseApi {
    contasPagar: ContasPagar;
}