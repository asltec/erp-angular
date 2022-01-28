import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produtos } from '../../models/produtos.model';
import { ProdutosFacade } from '../../produtos.facade';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  public produtoForm: FormGroup;
  public produto: Produtos;


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private facade: ProdutosFacade) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.preencheForm();
  }

  public get idRotaEditar$(): Observable<number> {
    return this.route.paramMap.pipe(map(params => +params.get('id')));
  }

  private iniciarForm() {
    this.produtoForm = this.formBuilder.group({
      descricao: ['',[Validators.required]],
      unidade: [''],
      quantidade: ['', [Validators.required]],
      valor_custo: ['', [Validators.required]],
      valor_venda: ['', [Validators.required]],
      status: [''],
    });
  }

  private preencheForm() {
    this.facade.preencheForm(this.idRotaEditar$).subscribe(produto => {
      if (produto) {
        const { descricao, unidade, quantidade, valor_custo, valor_venda, status} = produto;
        this.produtoForm.patchValue({ descricao, unidade, quantidade, valor_custo, valor_venda, status})
      }
    })
  }

  onSubmit() {
    if (!this.produtoForm.valid) {
      return false;
    } else {
      this.facade.salvar(this.produtoForm.value, this.idRotaEditar$);
    }
  }

  public voltarListagem() {
    this.router.navigate(['estoque/produtos'])
  }
}
