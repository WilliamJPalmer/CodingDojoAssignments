// rename this file from http service
import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';  // changed this from http

describe('ProductService', () => {  // changed this from http
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]  // changed this from http
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {  // changed this from http
    expect(service).toBeTruthy();
  }));
});
