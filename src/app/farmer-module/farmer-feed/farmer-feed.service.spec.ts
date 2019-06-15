import { TestBed } from '@angular/core/testing';

import { FarmerFeedService } from './farmer-feed.service';

describe('FarmerFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerFeedService = TestBed.get(FarmerFeedService);
    expect(service).toBeTruthy();
  });
});
