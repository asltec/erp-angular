import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InsumosFacade } from '../../insumos.facade';

@Component({
  selector: 'app-insumos-form',
  templateUrl: './insumos-form.component.html',
  styleUrls: ['./insumos-form.component.css']
})
export class InsumosFormComponent implements OnInit {

  public insumoForm: FormGroup;
  public grupoInsumos$;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private facade: InsumosFacade) { }

  ngOnInit(): void {

    this.iniciarForm();
    this.preencheForm();
    this.grupoInsumos$ = this.facade.getGrupoInsumos();
  }

  public get idRotaEditar$(): Observable<number> {
    return this.route.paramMap.pipe(map(params => +params.get('id')));
  }

  private iniciarForm() {
    this.insumoForm = this.formBuilder.group({
      id_grupo_insumo: [''],
      descricao: [''],
      status: [''],
      estoque_maximo: [''],
      estoque_minimo: [''],
      quantidade: [''],
      valor_unitario: ['']
    })
  }

  private preencheForm() {
    this.facade.preencheForm(this.idRotaEditar$).subscribe(insumo => {
      if (insumo) {
        const { descricao, status, estoque_maximo, estoque_minimo, quantidade, valor_unitario } = insumo;
        this.insumoForm.patchValue({ descricao, status, estoque_maximo, estoque_minimo, quantidade, valor_unitario })
      }
    })
  }

  onSubmit() {
    if (!this.insumoForm.valid) {
      return false;
    } else {
      this.facade.salvar(this.insumoForm.value, this.idRotaEditar$);
    }
  }

  public voltarListagem() {
    this.router.navigate(['estoque/insumos'])
  }
}
