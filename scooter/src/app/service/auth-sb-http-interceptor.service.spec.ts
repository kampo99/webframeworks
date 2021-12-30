import { TestBed } from '@angular/core/testing';

import { AuthSbHttpInterceptorService } from './auth-sb-http-interceptor.service';

describe('AuthSbHttpInterceptorService', () => {
  let service: AuthSbHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSbHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
