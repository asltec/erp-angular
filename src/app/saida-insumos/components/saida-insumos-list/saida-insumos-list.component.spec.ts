import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidaInsumosListComponent } from './saida-insumos-list.component';

describe('SaidaInsumosListComponent', () => {
  let component: SaidaInsumosListComponent;
  let fixture: ComponentFixture<SaidaInsumosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaidaInsumosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaidaInsumosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
