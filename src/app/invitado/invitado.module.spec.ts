import {InvitadoModule} from './invitado.module';

describe('invitadoModule', () => {
    let invitadoModule: InvitadoModule;

    beforeEach(() => {
        invitadoModule = new InvitadoModule();
    });

    it('should create an instance', () => {
        expect(invitadoModule).toBeTruthy();
    });
});
