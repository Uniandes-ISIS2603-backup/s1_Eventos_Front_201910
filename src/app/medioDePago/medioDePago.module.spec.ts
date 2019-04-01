import {MedioDePagoModule} from './medioDePago.module';

describe('MedioDePagoModule', ()=>{
    let medioDePagoModule: MedioDePagoModule;

    beforeEach(()=>{
        medioDePagoModule=new MedioDePagoModule();
    });

    it('should create an instance',()=>{
        expect(medioDePagoModule).toBeTruthy();
    })
})