import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {MedioDePagoService} from '../medioDePago.service';
import {MedioDePagoDetail} from '../medioDePago-detail';
import {ToastrService} from 'ngx-toastr';

/**
 * Componente edit del recurso medio de pago
 */
@Component({
    selector: 'app-medioDePago-edit',
    templateUrl: './medioDePago-edit.component.html',
    styleUrls: ['./medioDePago-edit.component.css']
})
export class MedioDePagoEditComponent implements OnInit{
    /**
     * Constructor del componente medio de pago
     * @param dp 
     * @param medioDePagoService 
     * @param toastrService 
     */
    constructor(
        private dp: DatePipe,
        private medioDePagoService: MedioDePagoService,
        private toastrService: ToastrService,
    ){}

    /**
     * medio de pago detail que llega enviado por el componente detail del recurso medio de pago
     */
    @Input() medioDePago: MedioDePagoDetail;


    /**
     * Evento que cancela la edicion del medio de pago
     */
    @Output() cancel = new EventEmitter();

    /**
     * Evento que ejecuta la actualizacion de un recurso medio de pago
     */
    @Output() update = new EventEmitter();

    /**
     * Cancela la edicion y emite el evento
     */
    cancelEdition(): void{
        this.cancel.emit();
    }

    /**
     * Se encarga de realizar la solicitud de edicion de recurso medio de pago a MedioDePagoService
     */
    editMedioDePago(): void{
        this.medioDePagoService.updateMedioDePago(this.medioDePago).subscribe(()=>{
            this.toastrService.success("El medio de pago se actualizó", "MedioDePago");
        });
        this.update.emit();
    }

    ngOnInit(){
        console.log(this.medioDePago);
    }

    ngOnChanges() {
        this.ngOnInit();
     }

}
