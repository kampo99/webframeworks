import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail32Component } from './detail32.component';

describe('Detail32Component', () => {
  let component: Detail32Component;
  let fixture: ComponentFixture<Detail32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detail32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
