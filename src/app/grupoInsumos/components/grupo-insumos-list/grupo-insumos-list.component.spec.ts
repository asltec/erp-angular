import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoInsumosListComponent } from './grupo-insumos-list.component';

describe('GrupoInsumosListComponent', () => {
  let component: GrupoInsumosListComponent;
  let fixture: ComponentFixture<GrupoInsumosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoInsumosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoInsumosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
