import { TestBed } from '@angular/core/testing';

import { ScooterSbService } from './scooter-sb.service';

describe('ScooterSbService', () => {
  let service: ScooterSbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScooterSbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
