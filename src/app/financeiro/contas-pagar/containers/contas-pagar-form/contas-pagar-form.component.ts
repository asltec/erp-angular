import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContasPagarFacade } from '../../contas-pagar.facade';

@Component({
  selector: 'app-contas-pagar-form',
  templateUrl: './contas-pagar-form.component.html',
  styleUrls: ['./contas-pagar-form.component.css']
})
export class ContasPagarFormComponent implements OnInit {

  public contasPagarForm: FormGroup;
  public planoConta$;
  
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private facade: ContasPagarFacade) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.preencheForm();
    this.planoConta$ = this.facade.getPlanoContas();
  }

  
  public get idRotaEditar$(): Observable<number> {
    return this.route.paramMap.pipe(map(params => +params.get('id')));
  }

  private iniciarForm() {
    this.contasPagarForm = this.formBuilder.group({
      descricao: ['', [Validators.required]],
      ocorrencia:[''],
      id_plano_conta: [''],
      forma_pagamento: ['', [Validators.required]],
      valor_conta: ['', [Validators.required]],
      data_lancamento: ['',[Validators.required]],
      data_vencimento: ['',[Validators.required]],
      pagamento: [''],
      observacao: ['']
    })
  }

  private preencheForm() {
    this.facade.preencheForm(this.idRotaEditar$).subscribe(contasPagar => {
      if (contasPagar) {
        const { descricao, ocorrencia, id_plano_conta, forma_pagamento, valor_conta, data_lancamento, data_vencimento, pagamento, observacao } = contasPagar;
        this.contasPagarForm.patchValue({ descricao, ocorrencia, id_plano_conta, forma_pagamento, valor_conta, data_lancamento, data_vencimento, pagamento, observacao })
      }
    })
  }

  onSubmit() {
    if (!this.contasPagarForm.valid) {
      return false;
    } else {
      this.facade.salvar(this.contasPagarForm.value, this.idRotaEditar$);
    }
  }

  public voltarListagem() {
    this.router.navigate(['financeiro/contas-pagar'])
  }

}
