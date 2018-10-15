import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanUpFormComponent } from './clean-up-form.component';

describe('CleanUpFormComponent', () => {
  let component: CleanUpFormComponent;
  let fixture: ComponentFixture<CleanUpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanUpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
