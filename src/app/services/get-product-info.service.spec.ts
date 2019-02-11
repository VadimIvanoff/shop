import { TestBed } from '@angular/core/testing';

import { GetProductInfoService } from './get-product-info.service';

describe('GetProductInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetProductInfoService = TestBed.get(GetProductInfoService);
    expect(service).toBeTruthy();
  });
});
