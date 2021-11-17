import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail35Component } from './detail35.component';

describe('Detail35Component', () => {
  let component: Detail35Component;
  let fixture: ComponentFixture<Detail35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detail35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
