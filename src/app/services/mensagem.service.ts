import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  public perguntaExclusao(): Promise<any> {
    return Swal.fire({
      title: 'Excluir registro?',
      text: "Tem certeza que deseja excluir esse registro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Não, voltar'
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      } else {
        return false;
      }
    })
  }

  public perguntaConfirmação(confirm: any): Promise<any> {
    return Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: confirm,
      showConfirmButton: false,
      timer: 1500
    })
  }
}
