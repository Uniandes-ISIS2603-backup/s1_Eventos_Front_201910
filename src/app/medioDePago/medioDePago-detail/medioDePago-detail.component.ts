import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MedioDePagoService } from '../medioDePago.service';

import { MedioDePagoDetail } from '../medioDePago-detail';
import { MedioDePago } from '../medioDePago';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-medioDePago-detail',
  templateUrl: './medioDePago-detail.component.html',
  styleUrls: ['./medioDePago-detail.component.css'],
  providers: [DatePipe]
})
export class MedioDePagoDetailComponent implements OnInit {

    @Input() medioDePagoDetail: MedioDePagoDetail;
    
    @Output() cancel = new EventEmitter();
    
    constructor(
        private route: ActivatedRoute,
        private medioDePagoService: MedioDePagoService 
  ) { }
  
    medioDePago_id: number;

    showEdit: boolean;
   
    getMedioDePagoDetail(): void {
        this.medioDePagoService.getMedioDePagoDetail(this.medioDePago_id)
            .subscribe(medioDePagoDetail => {
                this.medioDePagoDetail = medioDePagoDetail
            });
    }

    modifFecha(fec:String[]): string{
      let fechaM1: string[] = fec.toString().split("T");
      let fechaM2: string[] = fechaM1[0].split("-");
      let anio = fechaM2[0];
      let mes = fechaM2[1];
      return mes+"/"+anio;
  }

    numTar(num: string): string{
      let str2: string = num.substring(0,4);
      console.log(str2);
      return str2+"************";
    }


    showHideEdit(): void{
      this.showEdit=!this.showEdit;
  }

  cancelView(): void{
    this.cancel.emit();
}

  ngOnInit() {
      this.showEdit=false;
        this.medioDePago_id = +this.route.snapshot.paramMap.get('id');
        if (this.medioDePago_id){
        this.medioDePagoDetail = new MedioDePagoDetail();
        this.getMedioDePagoDetail();
  }

}
}