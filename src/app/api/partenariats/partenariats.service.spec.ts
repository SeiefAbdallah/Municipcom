import { TestBed } from '@angular/core/testing';

import { PartenariatsService } from './partenariats.service';

describe('PartenariatsService', () => {
  let service: PartenariatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartenariatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
