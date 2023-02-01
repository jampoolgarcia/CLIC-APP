import { TestBed } from '@angular/core/testing';

import { FullTableService } from './full-table.service';

describe('FullTableService', () => {
  let service: FullTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
