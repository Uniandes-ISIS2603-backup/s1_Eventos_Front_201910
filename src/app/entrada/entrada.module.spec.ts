import {EntradaModule} from './entrada.module';

describe('EntradaModule', ()=>{
    let entradaModule: EntradaModule;

    beforeEach(()=>{
        entradaModule=new EntradaModule();
    });

    it('should create an instance',()=>{
        expect(entradaModule).toBeTruthy();
    })
})