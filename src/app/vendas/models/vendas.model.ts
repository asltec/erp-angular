export interface Vendas {
    id_produto: number,
    quantidade: number,
    valor_unitario: number,
    id_item_venda: number,
    id_cliente: number,
    id_funcionario: number,
    data_venda: string,
    forma_pagamento: string,
    valor_total: string,
    observacao: string;
    data_vencimento: string;

}

