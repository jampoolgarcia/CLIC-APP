import { TestBed } from '@angular/core/testing';

import { ClientServicesService } from './client-services.service';

describe('ClientServicesService', () => {
  let service: ClientServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
