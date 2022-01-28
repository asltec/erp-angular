import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasFormComponent } from './vendas-form.component';

describe('VendasFormComponent', () => {
  let component: VendasFormComponent;
  let fixture: ComponentFixture<VendasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
