import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SaidaInsumosFacade } from '../../saida-insumos.facade';
import { InsumosService } from '../../services/insumos.service';

@Component({
  selector: 'app-saida-insumos-form',
  templateUrl: './saida-insumos-form.component.html',
  styleUrls: ['./saida-insumos-form.component.css']
})
export class SaidaInsumosFormComponent implements OnInit {
  
  public saidaInsumoForm: FormGroup;
  public insumos$;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private facade: SaidaInsumosFacade,
    private insumosService: InsumosService) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.preencheForm();
    this.insumos$ = this.insumosService.getInsumos();
  }

  public get idRotaEditar$(): Observable<number> {
    return this.route.paramMap.pipe(map(params => +params.get('id')));
  }

  private iniciarForm() {
    this.saidaInsumoForm = this.formBuilder.group({
    
      id_insumo: [''],
      quantidade: [''],
      data_saida:[''],
      valor_unitario: ['']
    })
  }

  private preencheForm() {
    this.facade.preencheForm(this.idRotaEditar$).subscribe(saidaInsumo => {
      if (saidaInsumo) {
        const { id_insumo, quantidade, valor_unitario } = saidaInsumo;
        this.saidaInsumoForm.patchValue({ id_insumo, quantidade, valor_unitario })
      }
    })
  }

  onSubmit() {
    if (!this.saidaInsumoForm.valid) {
      return false;
    } else {
      this.facade.salvar(this.saidaInsumoForm.value, this.idRotaEditar$);
    }
  }

  public voltarListagem() {
    this.router.navigate(['estoque/saida-insumos'])
  }

}
