import { TestBed } from '@angular/core/testing';

import { FarmerDashboardService } from './farmer-dashboard.service';

describe('FarmerDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerDashboardService = TestBed.get(FarmerDashboardService);
    expect(service).toBeTruthy();
  });
});
