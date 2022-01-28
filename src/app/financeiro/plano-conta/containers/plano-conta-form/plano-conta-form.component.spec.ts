import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoContaFormComponent } from './plano-conta-form.component';

describe('PlanoContaFormComponent', () => {
  let component: PlanoContaFormComponent;
  let fixture: ComponentFixture<PlanoContaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoContaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoContaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
