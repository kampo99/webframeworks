import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsbComponent } from './navbarsb.component';

describe('NavbarsbComponent', () => {
  let component: NavbarsbComponent;
  let fixture: ComponentFixture<NavbarsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarsbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
