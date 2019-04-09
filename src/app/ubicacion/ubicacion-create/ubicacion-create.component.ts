import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UbicacionService} from '../ubicacion.service';
import {Ubicacion}from '../ubicacion';




@Component({
  selector: 'app-ubicacion-create',
  templateUrl: './ubicacion-create.component.html',
  styleUrls: ['./ubicacion-create.component.css']
})
export class UbicacionCreateComponent implements OnInit {

  constructor(
        private ubicacionService: UbicacionService,
        private router: Router
    ) {}

ubicacion:Ubicacion;

/**
    * Creates a new ubicacion
    */
    createUbicacion(): Ubicacion {
        this.ubicacionService.createUbicacion(this.ubicacion)
            .subscribe(ubicacion => {
                this.ubicacion.id = ubicacion.id;
                this.router.navigate(['/ubicaciones/' + ubicacion.id]);
            });
        return this.ubicacion;
    }



  ngOnInit() {
        this.ubicacion = new Ubicacion();
    }

}
