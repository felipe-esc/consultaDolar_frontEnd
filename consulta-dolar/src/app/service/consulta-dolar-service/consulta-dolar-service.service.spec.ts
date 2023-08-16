import { TestBed } from '@angular/core/testing';

import { ConsultaDolarService } from './consulta-dolar-service.service';

describe('ConsultaDolarService', () => {
  let service: ConsultaDolarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaDolarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
