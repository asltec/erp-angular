import { ResponseApi } from '../../helpers/response.api';

export interface Insumos {

    id: number;
    id_insumo: number;
    id_grupo_insumo: number;
    descricao: string;
    estoque_minimo: number;
    estoque_maximo: number;
    status: string;
    quantidade: number;
    valor_unitario: number;
}

export interface InsumosResponse extends ResponseApi {
    insumos: Insumos[];
}

export interface InsumoResponse extends ResponseApi {
    insumos: Insumos;
}