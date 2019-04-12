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

    constructor(){
        
    }

    ngOnInit() {
       
    }

    
}