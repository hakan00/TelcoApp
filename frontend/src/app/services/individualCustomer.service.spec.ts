import { TestBed } from '@angular/core/testing';

import { IndividualCustomersService } from './individualCustomers.service';

describe('IndividualCustomersService', () => {
  let service: IndividualCustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualCustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
