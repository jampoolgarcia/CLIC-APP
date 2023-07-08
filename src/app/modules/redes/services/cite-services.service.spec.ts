import { TestBed } from '@angular/core/testing';

import { CiteServicesService } from './cite-services.service';

describe('ClientServicesService', () => {
  let service: CiteServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiteServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
