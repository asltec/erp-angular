import { ResponseApi } from '../../helpers/response.api';

export interface Fornecedores {

    id: number;
    id_fornecedor: number;
    nome: string;
    cnpj: string;
    endereco: string;
    numero: string;
    bairro: string;
    cep: string;
    cidade: string;
    uf: string;
    telefone: string;
    celular: string;
    email: string;
    status: string;

}

export interface FornecedoresResponse extends ResponseApi {
    fornecedores: Fornecedores[];
}

export interface FornecedoreResponse extends ResponseApi {
    fornecedores: Fornecedores;
}