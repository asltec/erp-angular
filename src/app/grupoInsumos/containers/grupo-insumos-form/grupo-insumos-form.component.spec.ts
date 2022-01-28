import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoInsumosFormComponent } from './grupo-insumos-form.component';

describe('GrupoInsumosFormComponent', () => {
  let component: GrupoInsumosFormComponent;
  let fixture: ComponentFixture<GrupoInsumosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoInsumosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoInsumosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
