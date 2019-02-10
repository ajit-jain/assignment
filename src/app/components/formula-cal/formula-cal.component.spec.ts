import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaCalComponent } from './formula-cal.component';

describe('FormulaCalComponent', () => {
  let component: FormulaCalComponent;
  let fixture: ComponentFixture<FormulaCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
