import { ResponseApi } from '../../helpers/response.api';

export interface Clientes {
    id: number;
    id_cliente: number;
    nome: string;
    cpf: string;
    cnpj: string;
    tipo: string;
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

export interface ClientesResponse extends ResponseApi {
    clientes: Clientes[];
}

export interface ClienteResponse extends ResponseApi {
    clientes: Clientes;
}