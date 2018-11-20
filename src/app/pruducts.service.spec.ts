import { TestBed, inject } from '@angular/core/testing';

import { PruductsService } from './pruducts.service';

describe('PruductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PruductsService]
    });
  });

  it('should be created', inject([PruductsService], (service: PruductsService) => {
    expect(service).toBeTruthy();
  }));
});
