import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CalificacionService } from '../calificacion.service';

import { CalificacionDetail } from '../calificacion-detail';
import { Calificacion } from '../calificacion';

@Component({
    selector: 'app-calificacion-detail',
    templateUrl: './calificacion-detail.component.html',
    styleUrls: ['./calificacion-detail.component.css']
  })
  export class CalificacionDetailComponent implements OnInit {

    @Input() calificacionDetail: CalificacionDetail;

    constructor(
        private route: ActivatedRoute,
        private calificacionService: CalificacionService 
  ) { }

    calificacion_id: number;

    getCalificacionDetail(): void {
        this.calificacionService.getCalificacionDetail(this.calificacion_id)
            .subscribe(calificacionDetail => {
                this.calificacionDetail = calificacionDetail
            });
    }

    ngOnInit() {
      
        this.calificacion_id = +this.route.snapshot.paramMap.get('id');
        if (this.calificacion_id){
        this.calificacionDetail = new CalificacionDetail();
        this.getCalificacionDetail();
        }
    }
  }