import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


import {Ubicacion } from '../../ubicacion';
import { UbicacionService } from '../../ubicacion.service';


@Component({
  selector: 'app-ubicacion-list',
  templateUrl: './ubicacion-list.component.html',
  styleUrls: ['./ubicacion-list.component.css']
})
export class UbicacionListComponent implements OnInit {

    /**
    * The list of   ubicaciones to display
    */
    @Input()   ubicaciones:  Ubicacion[];

    /**
    * The component's constructor
    */
    constructor(private ubicacionService:UbicacionService,
      private route: ActivatedRoute) {  }
    
    allUbicaciones:string = 'no';
    /**
    * This method retrieves all the   ubicaciones in the   ubicacionestore to show them in the list
    */
    getUbicaciones(): void {
        this.ubicacionService.getUbicaciones()
            .subscribe(  ubicaciones => {
                this.  ubicaciones =   ubicaciones;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
     this.route.queryParams
      .filter(params => params.allUbicaciones)
      .subscribe(params => {
        console.log(params); 

        this.allUbicaciones = params.alllUbicaciones;
        console.log(this.allUbicaciones); 
      });
      if (this.allUbicaciones == 'yes'){
          console.log("allUbicaciones");
      
       this.getUbicaciones();
       }
    }
    

}
