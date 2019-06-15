import { TestBed } from '@angular/core/testing';

import { FarmerRequestService } from './farmer-request.service';

describe('FarmerRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerRequestService = TestBed.get(FarmerRequestService);
    expect(service).toBeTruthy();
  });
});
