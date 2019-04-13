export class MedioDePago{

    /**
     * Id del medio de pago
     */
    id: number;

    /**
     * Nombre del dueño de la tarjeta
     */
    titular: string;

    /**
     * Numero de la tarjeta
     */
    numero: string;

    /**
     * Codigo de seguridad de la tarjeta
     */
    codigoDeSeguridad: string;

    /**
     * Fecha de expiracion de la tarjeta
     */
    fechaDeExpiracion: Date;
}