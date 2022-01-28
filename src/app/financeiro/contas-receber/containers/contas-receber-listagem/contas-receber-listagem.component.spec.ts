import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasReceberListagemComponent } from './contas-receber-listagem.component';

describe('ContasReceberListagemComponent', () => {
  let component: ContasReceberListagemComponent;
  let fixture: ComponentFixture<ContasReceberListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasReceberListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasReceberListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
