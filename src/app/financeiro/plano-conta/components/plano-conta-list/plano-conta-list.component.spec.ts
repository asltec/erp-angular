import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoContaListComponent } from './plano-conta-list.component';

describe('PlanoContaListComponent', () => {
  let component: PlanoContaListComponent;
  let fixture: ComponentFixture<PlanoContaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoContaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoContaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
