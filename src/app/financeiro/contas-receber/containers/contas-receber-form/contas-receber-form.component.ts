import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Clientes } from '../../../../clientes/models/clientes.model';
import { ContasReceberFacade } from '../../contas-receber.facade';

@Component({
  selector: 'app-contas-receber-form',
  templateUrl: './contas-receber-form.component.html',
  styleUrls: ['./contas-receber-form.component.css']
})
export class ContasReceberFormComponent implements OnInit {

  public contasReceberForm: FormGroup;
  public clientes: Clientes[];
  public clientes$;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private facade: ContasReceberFacade) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.preencheForm();
    this.clientes$ = this.facade.getClientes();
  }

  public get idRotaEditar$(): Observable<number> {
    return this.route.paramMap.pipe(map(params => +params.get('id')));
  }

  private iniciarForm() {
    this.contasReceberForm = this.formBuilder.group({
      id_cliente: [''],
      descricao: ['', [Validators.required]],
      valor_conta: ['', [Validators.required]],
      data_lancamento: ['', Validators.required],
      data_vencimento: ['', Validators.required],
      status: ['', Validators.required],
      observacao: ['']
    })
  }

  private preencheForm() {
    this.facade.preencheForm(this.idRotaEditar$).subscribe(contasReceber => {
      if (contasReceber) {
        const { id_cliente, descricao, valor_conta, data_lancamento, data_vencimento, status, observacao } = contasReceber;
        this.contasReceberForm.patchValue({ id_cliente, descricao, valor_conta, data_lancamento, data_vencimento, status, observacao })
      }
    })
  }

  onSubmit() {
    if (!this.contasReceberForm.valid) {
      return false;
    } else {
      this.facade.salvar(this.contasReceberForm.value, this.idRotaEditar$);
    }
  }

  public voltarListagem() {
    this.router.navigate(['financeiro/contas-receber'])
  }
}
