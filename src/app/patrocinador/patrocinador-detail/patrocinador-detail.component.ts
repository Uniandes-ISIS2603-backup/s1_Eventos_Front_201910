import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { PatrocinadorService } from '../patrocinador.service';

import { PatrocinadorDetail } from '../patrocinador-detail';
import { Patrocinador } from '../patrocinador';

@Component({
  selector: 'app-patrocinador-detail',
  templateUrl: './patrocinador-detail.component.html',
  styleUrls: ['./patrocinador-detail.component.css']
})
export class PatrocinadorDetailComponent implements OnInit {

    /**
    * The Patrocinador
    */
    @Input() patrocinadorDetail: PatrocinadorDetail;
    
  constructor(
        private route: ActivatedRoute,
        private patrocinadorService: PatrocinadorService 
  ) { }
  
      /**
    * El id del agenda que viene en el path get .../patrocinadores/patrocinador_id
    */
    patrocinador_id: number;
    
    /**
    * The method which obtains the patrocinador whose details we want to show
    */
    getPatrocinadorDetail(): void {
        this.patrocinadorService.getPatrocinadorDetail(this.patrocinador_id)
            .subscribe(patrocinadorDetail => {
                this.patrocinadorDetail = patrocinadorDetail
            });
    }

  ngOnInit() {
      
        this.patrocinador_id = +this.route.snapshot.paramMap.get('id');
        if (this.patrocinador_id){
        this.patrocinadorDetail = new PatrocinadorDetail();
        this.getPatrocinadorDetail();
        }
  }

}
