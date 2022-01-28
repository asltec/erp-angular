import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlanoContaFacade } from '../../plano-conta.facade';

@Component({
  selector: 'app-plano-conta-form',
  templateUrl: './plano-conta-form.component.html',
  styleUrls: ['./plano-conta-form.component.css']
})
export class PlanoContaFormComponent implements OnInit {

  public planoContaForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private facade: PlanoContaFacade) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.preencheForm();
  }

  public get idRotaEditar$(): Observable<number> {
    return this.route.paramMap.pipe(map(params => +params.get('id')));
  }

  private iniciarForm() {

    this.planoContaForm = this.formBuilder.group({
      conta: ['', [Validators.required]],
      descricao: ['', [Validators.required]]
    });
  }

  private preencheForm() {
    this.facade.preencheForm(this.idRotaEditar$).subscribe(planoConta => {
      if (planoConta) {
        const { conta, descricao } = planoConta;
        this.planoContaForm.patchValue({ conta, descricao })
      }
    })
  }

  onSubmit() {
    if (!this.planoContaForm.valid) {
      return false;
    } else {
      this.facade.salvar(this.planoContaForm.value, this.idRotaEditar$);
    }
  }

  public voltarListagem() {
    this.router.navigate(['financeiro/plano-conta'])
  }


}
