import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidaInsumosFormComponent } from './saida-insumos-form.component';

describe('SaidaInsumosFormComponent', () => {
  let component: SaidaInsumosFormComponent;
  let fixture: ComponentFixture<SaidaInsumosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaidaInsumosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaidaInsumosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
