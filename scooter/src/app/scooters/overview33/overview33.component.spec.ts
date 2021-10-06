import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overview33Component } from './overview33.component';

describe('Overview33Component', () => {
  let component: Overview33Component;
  let fixture: ComponentFixture<Overview33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Overview33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Overview33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
