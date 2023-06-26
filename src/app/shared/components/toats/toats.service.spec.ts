import { TestBed } from '@angular/core/testing';

import { ToatsService } from './toats.service';

describe('ToatsService', () => {
  let service: ToatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
