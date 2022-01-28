import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresListagemComponent } from './fornecedores-listagem.component';

describe('FornecedoresListagemComponent', () => {
  let component: FornecedoresListagemComponent;
  let fixture: ComponentFixture<FornecedoresListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedoresListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedoresListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
