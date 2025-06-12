import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { loginChildGuard } from './login-child-guard';

describe('loginChildGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
