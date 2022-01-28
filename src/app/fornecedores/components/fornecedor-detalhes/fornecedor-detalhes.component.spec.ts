import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorDetalhesComponent } from './fornecedor-detalhes.component';

describe('FornecedorDetalhesComponent', () => {
  let component: FornecedorDetalhesComponent;
  let fixture: ComponentFixture<FornecedorDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
