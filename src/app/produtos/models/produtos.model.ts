import { ResponseApi } from '../../helpers/response.api';

export interface Produtos {

    id: number,
    id_produto: number,
    descricao: string,
    unidade: string,
    quantidade: number,
    valor_custo: number,
    valor_venda: number,
    status: string,
}

export interface ProdutosResponse extends ResponseApi {
    produtos: Produtos[];
}

export interface ProdutoResponse extends ResponseApi {
    produtos: Produtos;
}
