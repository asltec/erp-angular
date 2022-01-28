import { ResponseApi } from '../../helpers/response.api';

export interface Usuarios{
    id: number;
    id_usuario: number;
    nome: string;
    email: string;
    senha: string;
}

export interface UsuariosResponse extends ResponseApi {
    usuarios: Usuarios[];
}

export interface UsuarioResponse extends ResponseApi {
    usuarios: Usuarios;
}