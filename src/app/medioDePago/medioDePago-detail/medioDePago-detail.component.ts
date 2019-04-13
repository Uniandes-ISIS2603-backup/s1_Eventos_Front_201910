import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MedioDePagoService } from '../medioDePago.service';

import { MedioDePagoDetail } from '../medioDePago-detail';
import { MedioDePago } from '../medioDePago';
import { DatePipe } from '@angular/common';

/**
 * Component detail de medio de pago
 */
@Component({
  selector: 'app-medioDePago-detail',
  templateUrl: './medioDePago-detail.component.html',
  styleUrls: ['./medioDePago-detail.component.css'],
  providers: [DatePipe]
})
export class MedioDePagoDetailComponent implements OnInit {

  /**
   * Medio de pago que se detallara en el componente. Recibido de MedioDePagoList  
  */
    @Input() medioDePagoDetail: MedioDePagoDetail;
    
    /**
     * Evento cancel, para cerrar el detalle.
     */
    @Output() cancel = new EventEmitter();
    
    /**
     * Constructor del componente detail de medio de pago
     * @param route 
     * @param medioDePagoService - service para obtener los datos
     */
    constructor(
        private route: ActivatedRoute,
        private medioDePagoService: MedioDePagoService 
  ) { }
  
  /**
   * Variable que almacena el id del medio de pago detail.
   */
    medioDePago_id: number;

    /**
     * Variable para mostar o no el detail
     */
    showEdit: boolean;
    
    /**
     * Obtiene el medio de pago detail
     */
    getMedioDePagoDetail(): void {
        this.medioDePagoService.getMedioDePagoDetail(this.medioDePago_id)
            .subscribe(medioDePagoDetail => {
                this.medioDePagoDetail = medioDePagoDetail
            });
    }

    /**
     * Retorna un string con la fecha segun el formato de las tarjetas de credito
     * @param fec fecha Date
     */
    modifFecha(fec:String[]): string{
      let fechaM1: string[] = fec.toString().split("T");
      let fechaM2: string[] = fechaM1[0].split("-");
      let anio = fechaM2[0];
      let mes = fechaM2[1];
      return mes+"/"+anio;
  }

  /**
   * Retorna el numero de la tarjeta con asteriscos
   * @param num numero de la tarjeta
   */
    numTar(num: string): string{
      let str2: string = num.substring(0,4);
      console.log(str2);
      return str2+"************";
    }

    /**
     * Muestra o esconde el componente edit, cambiando una variable booleana
     */
    showHideEdit(): void{
      this.showEdit=!this.showEdit;
  }

  /**
   * Evento cancel del detail
   */
  cancelView(): void{
    this.cancel.emit();
}

/**
 * Al iniciar, realizar las operaciones internas al metodo
 */
  ngOnInit() {
      this.showEdit=false;
        this.medioDePago_id = +this.route.snapshot.paramMap.get('id');
        if (this.medioDePago_id){
        this.medioDePagoDetail = new MedioDePagoDetail();
        this.getMedioDePagoDetail();
  }

}
}