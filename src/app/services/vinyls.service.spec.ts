import { TestBed, inject } from '@angular/core/testing';

import { VinylsService } from './vinyls.service';

describe('VinylsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VinylsService]
    });
  });

  it('should be created', inject([VinylsService], (service: VinylsService) => {
    expect(service).toBeTruthy();
  }));
});
