import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasPagarFormComponent } from './contas-pagar-form.component';

describe('ContasPagarFormComponent', () => {
  let component: ContasPagarFormComponent;
  let fixture: ComponentFixture<ContasPagarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasPagarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasPagarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
