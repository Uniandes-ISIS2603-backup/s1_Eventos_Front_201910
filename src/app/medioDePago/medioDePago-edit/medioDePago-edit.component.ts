import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {MedioDePagoService} from '../medioDePago.service';
import {MedioDePagoDetail} from '../medioDePago-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-medioDePago-edit',
    templateUrl: './medioDePago-edit.component.html',
    styleUrls: ['./medioDePago-edit.component.css']
})
export class MedioDePagoEditComponent implements OnInit{
    constructor(
        private dp: DatePipe,
        private medioDePagoService: MedioDePagoService,
        private toastrService: ToastrService,
    ){}

    @Input() medioDePago: MedioDePagoDetail;

    @Output() cancel = new EventEmitter();

    @Output() update = new EventEmitter();

    cancelEdition(): void{
        this.cancel.emit();
    }

    editMedioDePago(): void{
        console.log("se envia")
        console.log(this.medioDePago);
        this.medioDePagoService.updateMedioDePago(this.medioDePago).subscribe(()=>{
            this.toastrService.success("El medio de pago se actualizó", "MedioDePago");
        });
        this.update.emit();
    }

    ngOnInit(){
        console.log("enrtaaaaasldkalñsd");
        console.log(this.medioDePago);
    }

    ngOnChanges() {
        this.ngOnInit();
     }

}