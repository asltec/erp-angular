import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosListagemComponent } from './produtos-listagem.component';

describe('ProdutosListagemComponent', () => {
  let component: ProdutosListagemComponent;
  let fixture: ComponentFixture<ProdutosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
