import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumosListagemComponent } from './insumos-listagem.component';

describe('InsumosListagemComponent', () => {
  let component: InsumosListagemComponent;
  let fixture: ComponentFixture<InsumosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
