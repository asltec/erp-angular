import { ResponseApi } from '../../helpers/response.api';

export interface GrupoInsumos{
    
    id: number;
    id_grupo_insumo: number;
    descricao:string;
    status: string;
}


export interface GrupoInsumosResponse extends ResponseApi {
    grupoInsumos: GrupoInsumos[];
}

export interface GrupoInsumoResponse extends ResponseApi {
    grupoInsumos: GrupoInsumosResponse;
}