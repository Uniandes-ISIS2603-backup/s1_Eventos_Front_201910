import { TestBed } from '@angular/core/testing';

import { PatrocinadorService } from './patrocinador.service';

describe('PatrocinadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatrocinadorService = TestBed.get(PatrocinadorService);
    expect(service).toBeTruthy();
  });
});
