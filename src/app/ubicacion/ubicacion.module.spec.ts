import { UbicacionModule } from './ubicacion.module';

describe('UbicacionModule', () => {
  let ubicacionModule: UbicacionModule;

  beforeEach(() => {
    ubicacionModule = new UbicacionModule();
  });

  it('should create an instance', () => {
    expect(ubicacionModule).toBeTruthy();
  });
});
