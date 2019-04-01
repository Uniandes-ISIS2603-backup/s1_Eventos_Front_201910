import { PatrocinadorModule } from './patrocinador.module';

describe('PatrocinadorModule', () => {
  let patrocinadorModule: PatrocinadorModule;

  beforeEach(() => {
    patrocinadorModule = new PatrocinadorModule();
  });

  it('should create an instance', () => {
    expect(patrocinadorModule).toBeTruthy();
  });
});
