import { ResponseApi } from '../../helpers/response.api';

export interface Funcionarios {
    id: number;
    id_funcionario: number;
    nome: string;
    cpf: string;
    rg: string;
    tipo: string;
    sexo: string;
    endereco: string;
    numero: string;
    bairro: string;
    cep: string;
    cidade: string;
    uf: string;
    celular: string;
    email: string;
    status: string;
}

export interface FuncionariosResponse extends ResponseApi {
    funcionarios: Funcionarios[];
}

export interface FuncionarioResponse extends ResponseApi {
    funcionarios: Funcionarios;
}