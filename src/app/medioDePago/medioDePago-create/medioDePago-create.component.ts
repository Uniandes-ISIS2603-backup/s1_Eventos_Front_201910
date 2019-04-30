import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { DatePipe } from '@angular/common';

import { MedioDePagoService } from '../medioDePago.service';
import { MedioDePago } from '../medioDePago';


@Component({
  selector: 'app-medioDePago-create',
  templateUrl: './medioDePago-create.component.html',
  styleUrls: ['./medioDePago-create.component.css'],
  providers:[DatePipe]
})
export class MedioDePagoCreateComponent implements OnInit {

  constructor(
    private dp: DatePipe,
     private medioDePagoService: MedioDePagoService,
     private toastrService: ToastrService
  ) { }
  
    medioDePago: MedioDePago;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

    createMedioDePago(): MedioDePago {
      console.log(this.medioDePago);
      this.medioDePagoService.createMedioDePago(this.medioDePago).subscribe((medioDePago)=>{
        this.medioDePago = medioDePago;
        this.create.emit();
        this.toastrService.success("El medio de pago fue creado","Creación");
      })
      return this.medioDePago;
    }

    cancelCreation(): void {
      this.cancel.emit();
  }
    
  ngOnInit() {
      this.medioDePago = new MedioDePago();
  }

}