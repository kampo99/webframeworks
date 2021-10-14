import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail34Component } from './detail34.component';

describe('Detail34Component', () => {
  let component: Detail34Component;
  let fixture: ComponentFixture<Detail34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detail34Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
