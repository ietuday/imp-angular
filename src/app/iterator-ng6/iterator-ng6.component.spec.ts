import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteratorNg6Component } from './iterator-ng6.component';

describe('IteratorNg6Component', () => {
  let component: IteratorNg6Component;
  let fixture: ComponentFixture<IteratorNg6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteratorNg6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteratorNg6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
