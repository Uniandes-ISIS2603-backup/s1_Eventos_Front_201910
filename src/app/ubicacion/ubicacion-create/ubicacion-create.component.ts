import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

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
        private router: Router,
        private toastrService:ToastrService
    ) {}

ubicacion:Ubicacion;

@Output() cancel=new EventEmitter();
@Output() create=new EventEmitter();

 cancelCreation(): void {
        this.toastrService.warning('La ubicacion  no fue creada', 'Ubicacion creation');
        this.router.navigate(['/ubicacion/list']);
    }



/**
    * Creates a new ubicacion
    */
    createUbicacion(): Ubicacion {
        this.ubicacionService.createUbicacion(this.ubicacion)
            .subscribe(ubicacion => {
                this.ubicacion.id = ubicacion.id;
                                this.create.emit();
                this.toastrService.success("El evento fue creado","evento creation");
                this.router.navigate(['/ubicaciones/' + ubicacion.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            }
            );
        return this.ubicacion;
    }



  ngOnInit() {
        this.ubicacion = new Ubicacion();
    }

}
