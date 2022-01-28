import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasReceberFormComponent } from './contas-receber-form.component';

describe('ContasReceberFormComponent', () => {
  let component: ContasReceberFormComponent;
  let fixture: ComponentFixture<ContasReceberFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasReceberFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasReceberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
