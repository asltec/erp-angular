import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendasFacade } from '../../vendas.facade';

@Component({
  selector: 'app-vendas-form',
  templateUrl: './vendas-form.component.html',
  styleUrls: ['./vendas-form.component.css']
})
export class VendasFormComponent implements OnInit {

  public vendasForm: FormGroup;
  public itemsVendaForm: FormGroup;
  public control: FormArray;
  public mode: boolean;
  public touchedRows: any;
  public produtos$;

  constructor(private formBuilder: FormBuilder,
    public facade: VendasFacade) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.produtos$ = this.facade.getProdutos();
    this.touchedRows = [];

    this.itemsVendaForm = this.formBuilder.group({
      tableRows: this.formBuilder.array([])
    });
    this.addRow();
  }

  ngAfterOnInit() {
    this.control = this.itemsVendaForm.get('tableRows') as FormArray;
  }

  private iniciarForm() {
    this.vendasForm = this.formBuilder.group({
      id_cliente: [''],
      id_funcionario: [''],
      data_venda: [''],
      data_entrega: [''],
      situacao: [''],
      canal_venda: [''],
      id_produto: [''],
      data_vencimento:[],
      observacao:[],
      forma_pagamento:['']
    })
  }

  iniciarFormProdutos(): FormGroup {
    return this.formBuilder.group({
      id_produto: [''],
      quantidade: ['', Validators.required],
      valor_unitario: [''],
      subtotal: [''],
      isEditable: [true]

    })
  }

  addRow() {
    const control = this.itemsVendaForm.get('tableRows') as FormArray;
    control.push(this.iniciarFormProdutos());
  }

  deleteRow(index: number) {
    const control = this.itemsVendaForm.get('tableRows') as FormArray;
    control.removeAt(index);
  }

  get getFormControls() {
    const control = this.itemsVendaForm.get('tableRows') as FormArray;
    return control;
  }

  toggleTheme() {
    this.mode = !this.mode;
  }

  editRow(group: FormGroup) {
    group.get('isEditable').setValue(true);
  }

  getSelectedOptionText(event: Event) {
    let selectedOptions = event.target['options'];
    let selectedIndex = selectedOptions.selectedIndex;
    let selectElementText = selectedOptions[selectedIndex].text;
    console.log(selectElementText)
 }


}
