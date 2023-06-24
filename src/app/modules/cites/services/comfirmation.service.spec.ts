import { TestBed } from '@angular/core/testing';

import { ComfirmationService } from './comfirmation.service';

describe('ComfirmationService', () => {
  let service: ComfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
