import { ResponseApi } from '../../helpers/response.api';

export interface SaidaInsumos {
    id: number;
    id_saida_insumo: number;
    id_insumo: number;
    quantidade: number;
    data_saida: string;
    valor_unitario: number;
}

export interface SaidaInsumosResponse extends ResponseApi {
    saidaInsumos: SaidaInsumos[];
}

export interface SaidaInsumoResponse extends ResponseApi {
    saidaInsumos: SaidaInsumos;
}

