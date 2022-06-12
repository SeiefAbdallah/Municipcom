import { TestBed } from '@angular/core/testing';

import { CirconscriptionService } from './circonscription.service';

describe('CirconscriptionService', () => {
  let service: CirconscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CirconscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
