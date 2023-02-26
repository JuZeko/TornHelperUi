import { TestBed } from '@angular/core/testing';

import { TornStatusService } from './torn-status.service';

describe('TornStatusService', () => {
  let service: TornStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TornStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
