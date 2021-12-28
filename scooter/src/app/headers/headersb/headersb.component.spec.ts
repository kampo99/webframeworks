import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersbComponent } from './headersb.component';

describe('HeadersbComponent', () => {
  let component: HeadersbComponent;
  let fixture: ComponentFixture<HeadersbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadersbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
