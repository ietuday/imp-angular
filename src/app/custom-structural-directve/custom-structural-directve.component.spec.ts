import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStructuralDirectveComponent } from './custom-structural-directve.component';

describe('CustomStructuralDirectveComponent', () => {
  let component: CustomStructuralDirectveComponent;
  let fixture: ComponentFixture<CustomStructuralDirectveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomStructuralDirectveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStructuralDirectveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
