import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasPagarListagemComponent } from './contas-pagar-listagem.component';

describe('ContasPagarListagemComponent', () => {
  let component: ContasPagarListagemComponent;
  let fixture: ComponentFixture<ContasPagarListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasPagarListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasPagarListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
