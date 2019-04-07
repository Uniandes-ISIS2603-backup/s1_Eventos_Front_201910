import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { CalificacionService } from '../calificacion.service';
import { Calificacion } from '../calificacion';

@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css']
})
export class CalificacionCreateComponent implements OnInit {

    constructor(
        private calificacionService: CalificacionService
     ) { }

     calificacion: Calificacion;

     @Output() cancel = new EventEmitter();

     @Output() create = new EventEmitter();

     cancelCreation(): void {
        this.cancel.emit();
    }
    
     ngOnInit() {
        this.calificacion = new Calificacion();
    }
}