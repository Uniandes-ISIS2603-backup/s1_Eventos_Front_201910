import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { EntradaService } from '../entrada.service';

import { EntradaDetail } from '../entrada-detail';
import { Entrada } from '../entrada';

@Component({
  selector: 'app-entrada-detail',
  templateUrl: './entrada-detail.component.html',
  styleUrls: ['./entrada-detail.component.css']
})
export class EntradaDetailComponent implements OnInit {

    @Input() entradaDetail: EntradaDetail;
    
  constructor(
        private route: ActivatedRoute,
        private entradaService: EntradaService 
  ) { }
  
    entrada_id: number;
   
    getEntradaDetail(): void {
        this.entradaService.getEntradaDetail(this.entrada_id)
            .subscribe(entradaDetail => {
                this.entradaDetail = entradaDetail
            });
    }

  ngOnInit() {
      
        this.entrada_id = +this.route.snapshot.paramMap.get('id');
        if (this.entrada_id){
        this.entradaDetail = new EntradaDetail();
        this.getEntradaDetail();
  }

}
}