import { TestBed } from '@angular/core/testing';

import { JsonplaceholderapiService } from './jsonplaceholderapi.service';

describe('JsonplaceholderapiService', () => {
  let service: JsonplaceholderapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonplaceholderapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
