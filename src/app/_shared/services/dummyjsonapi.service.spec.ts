import { TestBed } from '@angular/core/testing';

import { DummyJSONApiService } from './dummyjsonapi.service';

describe('DummyJSONApiService', () => {
  let service: DummyJSONApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyJSONApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
