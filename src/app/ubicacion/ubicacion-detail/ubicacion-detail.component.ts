import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';

import { UbicacionService } from '../ubicacion.service';
import { UbicacionDetail } from '../ubicacion-detail';
import {Ubicacion} from '../ubicacion'

@Component({
  selector: 'app-ubicacion-detail',
  templateUrl: './ubicacion-detail.component.html',
  styleUrls: ['./ubicacion-detail.component.css']
})
export class UbicacionDetailComponent implements OnInit {

  constructor(
  private ubicacionService: UbicacionService,
        private route: ActivatedRoute,
        private router: Router,
        private viewRef: ViewContainerRef,
    ) { }

/**
    * The ubicacion's id retrieved from the path
    */
    ubicacion_id: number;

    /**
    * The ubicacion whose details are shown
    */
    ubicacionDetail: UbicacionDetail;

 getUbicacionDetail(): void {
         this.ubicacionService.getUbicacionDetail(this.ubicacion_id)
            .subscribe(ubicacionDetail => {
                this.ubicacionDetail = ubicacionDetail;
            });
    }

 ngOnInit() {
        this.ubicacion_id = + this.route.snapshot.paramMap.get('id');
        this.ubicacionDetail = new UbicacionDetail();
        this.getUbicacionDetail();
        
    }

}
