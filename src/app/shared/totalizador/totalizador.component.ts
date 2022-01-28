import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-totalizador',
  templateUrl: './totalizador.component.html',
  styleUrls: ['./totalizador.component.css']
})
export class TotalizadorComponent implements OnInit {

  @Input() public linkVoltar;
  @Input() public labelBotaoAdicao;
  @Input() public labelBotaoAtualizacao;
  @Input() public botaoVoltar = false;
  @Input() public adicaoRegistros = false;
  @Input() public refreshRegistros = false;
  @Output() public cliqueBotao: EventEmitter<any> = new EventEmitter();
  @Output() public totalRegistros: EventEmitter<any> = new EventEmitter();
  @Output() public atualizar: EventEmitter<any> = new EventEmitter();  

  public _qtdRegistros: any = 0;


  @Input() set qtdRegistros(registros: any) {
    this._qtdRegistros = registros;
  }


  get qtdRegistros() {
    return this._qtdRegistros;
  }

  public voltarParaLink() {

    this.router.navigateByUrl(this.linkVoltar);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
