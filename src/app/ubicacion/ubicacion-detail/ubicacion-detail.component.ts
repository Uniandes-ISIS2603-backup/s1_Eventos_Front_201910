import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';

import { UbicacionService } from '../ubicacion.service';
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
    ubicacion: Ubicacion;

 getUbicacionDetail(): void {
         this.ubicacionService.getUbicacion(this.ubicacion_id)
            .subscribe(ubicacion => {
                this.ubicacion = ubicacion;
            });
    }
    

 ngOnInit() {
        this.ubicacion_id = + this.route.snapshot.paramMap.get('id');
        this.ubicacion = new Ubicacion();
        this.getUbicacionDetail();
        
    }


 
}




