import { TestBed } from '@angular/core/testing';

import { EntradaService } from './entrada.service';

describe('OrganizadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntradaService = TestBed.get(EntradaService);
    expect(service).toBeTruthy();
  });
});