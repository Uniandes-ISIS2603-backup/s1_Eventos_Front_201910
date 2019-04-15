import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { DatePipe } from '@angular/common';

import { MedioDePagoService } from '../medioDePago.service';
import { MedioDePago } from '../medioDePago';

/**
 * Componente create medio de pago
 */
@Component({
  selector: 'app-medioDePago-create',
  templateUrl: './medioDePago-create.component.html',
  styleUrls: ['./medioDePago-create.component.css'],
  providers:[DatePipe]
})
export class MedioDePagoCreateComponent implements OnInit {

  /**
   * Constructor del componente medio de pago
   * @param dp 
   * @param medioDePagoService 
   * @param toastrService 
   */
  constructor(
    private dp: DatePipe,
     private medioDePagoService: MedioDePagoService,
     private toastrService: ToastrService
  ) { }
  
  /**
   * Medio de pago a añadir en la base de datos
   */
    medioDePago: MedioDePago;

    /**
     * Evento para cancelar la creacion
     */
    @Output() cancel = new EventEmitter();

    /**
     * Evento para crear un nuevo ejemplo del recurso
     */
    @Output() create = new EventEmitter();

    /**
     * Llama a MedioDePagoService que se encarga de realizar la petición http POST
     */
    createMedioDePago(): MedioDePago {
      console.log(this.medioDePago);
      this.medioDePagoService.createMedioDePago(this.medioDePago).subscribe((medioDePago)=>{
        this.medioDePago = medioDePago;
        this.create.emit();
        this.toastrService.success("El medio de pago fue creado","Creación");
      })
      return this.medioDePago;
    }

    /**
     * Cancela la creacion del recurso medio de pago
     */
    cancelCreation(): void {
      this.cancel.emit();
  }
    
  /**
   * Al iniciar el componente, cree un medio de pago vacio.
   */
  ngOnInit() {
      this.medioDePago = new MedioDePago();
  }

}