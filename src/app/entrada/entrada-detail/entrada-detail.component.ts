import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { EntradaService } from '../entrada.service';

import { EntradaDetail } from '../entrada-detail';
import { Entrada } from '../entrada';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-entrada-detail',
  templateUrl: './entrada-detail.component.html',
  styleUrls: ['./entrada-detail.component.css'],
  providers: [DatePipe]
})
export class EntradaDetailComponent implements OnInit {

    @Input() entradaDetail: EntradaDetail;

    @Output() cancel = new EventEmitter();
    
  constructor(
        private route: ActivatedRoute,
        private entradaService: EntradaService 
  ) { }
  
    entrada_id: number;

    showEdit: boolean;
   
    getEntradaDetail(): void {
        this.entradaService.getEntradaDetail(this.entrada_id)
            .subscribe(entradaDetail => {
                this.entradaDetail = entradaDetail
            });
    }

    cancelView(): void{
      this.cancel.emit();
  }

    showHideEdit(): void{
      this.showEdit=!this.showEdit;
  }


  ngOnInit() {
      this.showEdit=false;
        this.entrada_id = +this.route.snapshot.paramMap.get('id');
        if (this.entrada_id){
        this.entradaDetail = new EntradaDetail();
        this.getEntradaDetail();
  }

}
}