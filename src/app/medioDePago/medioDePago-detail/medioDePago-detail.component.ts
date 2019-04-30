import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { MedioDePagoService } from '../medioDePago.service';

import { MedioDePagoDetail } from '../medioDePago-detail';
import { MedioDePago } from '../medioDePago';

@Component({
  selector: 'app-medioDePago-detail',
  templateUrl: './medioDePago-detail.component.html',
  styleUrls: ['./medioDePago-detail.component.css']
})
export class MedioDePagoDetailComponent implements OnInit {

    @Input() medioDePagoDetail: MedioDePagoDetail;
    
  constructor(
        private route: ActivatedRoute,
        private medioDePagoService: MedioDePagoService 
  ) { }
  
    medioDePago_id: number;
   
    getMedioDePagoDetail(): void {
        this.medioDePagoService.getMedioDePagoDetail(this.medioDePago_id)
            .subscribe(medioDePagoDetail => {
                this.medioDePagoDetail = medioDePagoDetail
            });
    }

  ngOnInit() {
      
        this.medioDePago_id = +this.route.snapshot.paramMap.get('id');
        if (this.medioDePago_id){
        this.medioDePagoDetail = new MedioDePagoDetail();
        this.getMedioDePagoDetail();
  }

}
}