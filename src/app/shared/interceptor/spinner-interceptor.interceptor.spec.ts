import { TestBed } from '@angular/core/testing';

import { SpinnerInterceptor } from './spinner-interceptor.interceptor';

describe('SpinnerInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SpinnerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SpinnerInterceptor = TestBed.inject(SpinnerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
