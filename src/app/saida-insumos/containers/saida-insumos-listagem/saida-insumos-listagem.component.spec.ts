import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidaInsumosListagemComponent } from './saida-insumos-listagem.component';

describe('SaidaInsumosListagemComponent', () => {
  let component: SaidaInsumosListagemComponent;
  let fixture: ComponentFixture<SaidaInsumosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaidaInsumosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaidaInsumosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
