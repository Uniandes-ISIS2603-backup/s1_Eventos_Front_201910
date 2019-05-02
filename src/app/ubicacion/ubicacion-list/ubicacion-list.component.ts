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
selectedUbicacion:Ubicacion;
showCreate:boolean;
    
    showEdit: boolean;
    
    ubicacion_id: number;
    /**
    * The component's constructor
    */
    constructor(
    private ubicacionService: UbicacionService,  
    private route: ActivatedRoute) {  }
    
    
    onSelected(ubicacion_id: number): void {
        this.showCreate = false;
        this.showEdit = false;
        this.ubicacion_id = ubicacion_id;
        this.selectedUbicacion = new Ubicacion();
    }
    
    /**
    * Shows or hides the create component
    */
    showHideEdit(ubicacion_id: number): void {
        if (!this.showEdit || (this.showEdit && ubicacion_id != this.selectedUbicacion.id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.ubicacion_id = ubicacion_id;
            this.selectedUbicacion = new Ubicacion();
        }
        else {
            this.showEdit = false;
        }
    }
    showHideCreate(): void {
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }
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
    