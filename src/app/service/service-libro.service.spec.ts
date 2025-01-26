import { TestBed } from '@angular/core/testing';
import { ServiceLibri } from './service-libro.service';

describe('ServiceLibroService', () => {
  let service: ServiceLibri;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLibri);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
