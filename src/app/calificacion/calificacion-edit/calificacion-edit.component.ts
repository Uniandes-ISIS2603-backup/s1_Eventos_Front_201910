import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {CalificacionService} from '../calificacion.service';
import {CalificacionDetail} from '../calificacion-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-calificacion-edit',
    templateUrl: './calificacion-edit.component.html',
    styleUrls: ['./calificacion-edit.component.css']
})
export class CalificacionEditComponent implements OnInit{

    constructor(
        private dp: DatePipe,
        private calificacionaService: CalificacionService,
        private toastrService: ToastrService,
    ){}

    @Input() calificacion: CalificacionDetail

    @Output() cancel = new EventEmitter();

    @Output() update = new EventEmitter();



    cancelEdition(): void{
        this.cancel.emit();
    }

    editCalificacion(): void{
        this.calificacionaService.updateCalificacion(this.calificacion).subscribe(()=>{
            this.toastrService.success("La calificación se actualizó", "Calificacion");
        });
        this.update.emit();
    }

    ngOnInit(){
        console.log("enrtaaaaasldkalñsd");
        console.log(this.calificacion);
    }

    ngOnChanges() {
       this.ngOnInit();
    }

    
}