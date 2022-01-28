import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoContaListagemComponent } from './plano-conta-listagem.component';

describe('PlanoContaListagemComponent', () => {
  let component: PlanoContaListagemComponent;
  let fixture: ComponentFixture<PlanoContaListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoContaListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoContaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
