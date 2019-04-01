import { TestBed } from '@angular/core/testing';

import { OrganizadorService } from './organizador.service';

describe('OrganizadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizadorService = TestBed.get(OrganizadorService);
    expect(service).toBeTruthy();
  });
});
