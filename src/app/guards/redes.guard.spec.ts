import { TestBed } from '@angular/core/testing';

import { RedesGuard } from './redes.guard';

describe('RedesGuard', () => {
  let guard: RedesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
