import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


import { Ubicacion } from '../../ubicacion/ubicacion';
import { UbicacionService } from '../../ubicacion/ubicacion.service';

@Component({
    selector: 'app-ubicacion-list',
    templateUrl: './ubicacion-list.component.html',
    styleUrls: ['./ubicacion-list.component.css']
})
export class UbicacionListComponent implements OnInit {

    /**
    * The list of Ubicaciones to display
    */
    ubicaciones: Ubicacion[];

    /**
    * The component's constructor
    */
    constructor(
    private ubicacionService: UbicacionService,  
    private route: ActivatedRoute) {  }
    
    /**
    * This method retrieves all the Ubicaciones in the Ubicacionestore to show them in the list
    */
    getUbicaciones(): void {
        this.ubicacionService.getUbicaciones()
            .subscribe(ubicaciones => {
                this.ubicaciones = ubicaciones;
            });
    }
   


    /**
    * The method which initializes the component
    */
    ngOnInit() {
     
       this.getUbicaciones();
    }
    }
    