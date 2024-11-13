import { TestBed } from '@angular/core/testing';

import { DummyjsonapiService } from './dummyjsonapi.service';

describe('DummyjsonapiService', () => {
  let service: DummyjsonapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyjsonapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
