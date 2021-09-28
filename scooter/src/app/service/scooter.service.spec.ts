import { TestBed } from '@angular/core/testing';

import { ScooterService } from './scooter.service';

describe('ScooterService', () => {
  let service: ScooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
