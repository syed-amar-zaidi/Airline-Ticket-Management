import { TestBed } from '@angular/core/testing';

import { FlightService } from './flight.service';

describe('FlightServicesService', () => {
  let service: FlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
