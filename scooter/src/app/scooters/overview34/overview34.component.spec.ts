import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overview34Component } from './overview34.component';

describe('Overview34Component', () => {
  let component: Overview34Component;
  let fixture: ComponentFixture<Overview34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Overview34Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Overview34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
