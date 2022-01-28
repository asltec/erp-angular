import { ResponseApi } from '../../../helpers/response.api';

export interface ContasReceber {
    id: number;
    id_contas_receber: number;
    id_cliente: number;
    descricao: string;
    valor_conta: string;
    data_lancamento: string;
    data_vencimento: string;
    observacao: string;
    status: string;

}

export interface ContasReceberResponse extends ResponseApi {
    contasReceber: ContasReceber[];
}

export interface ContaReceberResponse extends ResponseApi {
    contasReceber: ContasReceber;
}