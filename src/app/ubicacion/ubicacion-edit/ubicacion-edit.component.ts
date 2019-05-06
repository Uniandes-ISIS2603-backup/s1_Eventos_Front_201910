import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {UbicacionService} from '../ubicacion.service';
import {Ubicacion} from '../ubicacion';



@Component({
  selector: 'app-ubicacion-edit',
  templateUrl: './ubicacion-edit.component.html',
  styleUrls: ['./ubicacion-edit.component.css']
})
export class UbicacionEditComponent implements OnInit {

  constructor(
        private ubicacionService: UbicacionService,        private router: Router,
        private route: ActivatedRoute
    ) {}

ubicacion:Ubicacion;
ubicacion_id:number;

 /**
    * Retrieves the information of the ubicacion which will be updated
    */
    getUbicacion(): void {
        this.ubicacionService.getUbicacion(this.ubicacion_id).subscribe(ubicacion => {
            this.ubicacion = ubicacion;
        });
    }
/**
    * This function updates the ubicacion
    */
    updateUbicacion(): void {
        this.ubicacionService.updateUbicacion(this.ubicacion)
            .subscribe(() => {
                this.router.navigate(['/ubicaciones/' + this.ubicacion.id]);
            });
    }

ngOnInit() {
        this.ubicacion_id = +this.route.snapshot.paramMap.get('id');
        this.getUbicacion();
        
    }


}
