import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAttributeComponent } from './angular-attribute.component';

describe('AngularAttributeComponent', () => {
  let component: AngularAttributeComponent;
  let fixture: ComponentFixture<AngularAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
