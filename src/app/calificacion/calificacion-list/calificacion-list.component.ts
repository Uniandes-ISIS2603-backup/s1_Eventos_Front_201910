import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';
@Component({
    selector: 'app-calificacion-list',
    templateUrl: './calificacion-list.component.html',
    styleUrls: ['./calificacion-list.component.css']
})
export class CalificacionListComponent implements OnInit {

    constructor(
        private calificacionService: CalificacionService
        ){}

        calificaciones: Calificacion[];

        showCreate: boolean;

        getCalificaciones(): void{
            this.calificacionService.getCalificaciones().subscribe(
                calificaciones => {
                    this.calificaciones=calificaciones;
                });
        }

        showHideCreate(): void{
            this.showCreate=!this.showCreate;
        }

    ngOnInit() {
        this.showCreate = false;
        this.getCalificaciones();
    }
        
    }
