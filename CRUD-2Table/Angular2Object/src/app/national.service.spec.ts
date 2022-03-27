import { TestBed } from '@angular/core/testing';

import { NationalService } from './service/national.service';

describe('NationalService', () => {
  let service: NationalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
