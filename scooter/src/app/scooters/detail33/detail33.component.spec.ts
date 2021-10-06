import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail33Component } from './detail33.component';

describe('Detail33Component', () => {
  let component: Detail33Component;
  let fixture: ComponentFixture<Detail33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detail33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
