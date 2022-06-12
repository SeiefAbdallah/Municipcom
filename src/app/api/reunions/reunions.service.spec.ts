import { TestBed } from '@angular/core/testing';

import { ReunionsService } from './reunions.service';

describe('ReunionsService', () => {
  let service: ReunionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReunionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
