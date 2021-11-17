import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overview35Component } from './overview35.component';

describe('Overview35Component', () => {
  let component: Overview35Component;
  let fixture: ComponentFixture<Overview35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Overview35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Overview35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
