import { Injectable } from '@angular/core';
import { ResponseApi } from '../helpers/response.api';
import { INotificacaoService } from './inotificacao.service';

declare var $: any;

@Injectable()
export class NotificacaoService implements INotificacaoService {

    constructor() { }

    public temas = ['', 'info', 'success', 'warning', 'danger', 'danger'];
    public icones = ['', 'ti-info-alt', 'ti-check', 'ti-signal', 'ti-close', 'ti-close'];

    public notificar(cod, mensagem) {
        var i = parseInt(cod) / 100;
        i -= i % 1;


        return $.notify({
            icon: this.icones[i],
            message: mensagem
        }, {
            type: this.temas[i],
            timer: 250,
            placement: {
                from: "top",
                align: "center"
            },
            z_index: 2000
        });
    }

    public notificarResponse(response: ResponseApi) {

        if (!response.status) {
            console.error('Erro Interno: ', response);
            return this.notificar(500, 'Erro Interno');
        }

        return this.notificar(response.status, response.mensagem);
    }
}
