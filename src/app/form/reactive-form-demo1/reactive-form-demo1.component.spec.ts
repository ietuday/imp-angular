import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormDemo1Component } from './reactive-form-demo1.component';

describe('ReactiveFormDemo1Component', () => {
  let component: ReactiveFormDemo1Component;
  let fixture: ComponentFixture<ReactiveFormDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
