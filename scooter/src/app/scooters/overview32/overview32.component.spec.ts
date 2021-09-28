import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overview32Component } from './overview32.component';

describe('Overview32Component', () => {
  let component: Overview32Component;
  let fixture: ComponentFixture<Overview32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Overview32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Overview32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
