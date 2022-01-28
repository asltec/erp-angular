import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GrupoInsumosFacade } from '../../grupo-insumos.facade';
import { GrupoInsumos } from '../../models/grupo-insumos.model';

@Component({
  selector: 'app-grupo-insumos-form',
  templateUrl: './grupo-insumos-form.component.html',
  styleUrls: ['./grupo-insumos-form.component.css']
})
export class GrupoInsumosFormComponent implements OnInit {

  public grupoInsumosForm: FormGroup;
  public grupoInsumos: GrupoInsumos[];
 
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private facade: GrupoInsumosFacade) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.preencheForm();
    
  }

  public get idRotaEditar$(): Observable<number> {
    return this.route.paramMap.pipe(map(params => +params.get('id')));
  }

  private iniciarForm() {
    this.grupoInsumosForm = this.formBuilder.group({
     
      descricao: ['', [Validators.required]],
      status: ['', Validators.required],
    
    })
  }

  private preencheForm() {
    this.facade.preencheForm(this.idRotaEditar$).subscribe(grupoInsumos => {
      if (grupoInsumos) {
        const { descricao, status } = grupoInsumos;
        this.grupoInsumosForm.patchValue({ descricao, status })
      }
    })
  }

  onSubmit() {
    if (!this.grupoInsumosForm.valid) {
      return false;
    } else {
      this.facade.salvar(this.grupoInsumosForm.value, this.idRotaEditar$);
    }
  }

  public voltarListagem() {
    this.router.navigate(['estoque/grupo-insumos'])
  }

}
