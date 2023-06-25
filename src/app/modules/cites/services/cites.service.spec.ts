import { TestBed } from '@angular/core/testing';

import { CitesService } from './cites.service';

describe('CitesService', () => {
  let service: CitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
