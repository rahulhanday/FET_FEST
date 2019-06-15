import { TestBed } from '@angular/core/testing';

import { FarmerConfirmationService } from './farmer-confirmation.service';

describe('FarmerConfirmationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerConfirmationService = TestBed.get(FarmerConfirmationService);
    expect(service).toBeTruthy();
  });
});
