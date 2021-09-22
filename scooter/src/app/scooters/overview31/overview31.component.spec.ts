import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overview31Component } from './overview31.component';

describe('Overview31Component', () => {
  let component: Overview31Component;
  let fixture: ComponentFixture<Overview31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Overview31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Overview31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
