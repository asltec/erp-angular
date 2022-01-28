import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoInsumosListagemComponent } from './grupo-insumos-listagem.component';

describe('GrupoInsumosListagemComponent', () => {
  let component: GrupoInsumosListagemComponent;
  let fixture: ComponentFixture<GrupoInsumosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoInsumosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoInsumosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
