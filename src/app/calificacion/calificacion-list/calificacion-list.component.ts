import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';
import { forEach } from '@angular/router/src/utils/collection';
import { ModalDialogService } from 'ngx-modal-dialog';
import {  ToastrService } from 'ngx-toastr';
import { CalificacionDetail } from '../calificacion-detail';
import {CalifEstre} from '../califEstre';
@Component({
    selector: 'app-calificacion-list',
    templateUrl: './calificacion-list.component.html',
    styleUrls: ['./calificacion-list.component.css']
})
export class CalificacionListComponent implements OnInit {

    constructor(
        private calificacionService: CalificacionService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
        ){}

        calificaciones: Calificacion[];

        califEstre: CalifEstre[];

        calificacion_id: number;

        showCreate: boolean;

        showEdit: boolean;

        showView: boolean;

        selectedCalificacion: Calificacion;

        getCalificaciones(): void{
            this.calificacionService.getCalificaciones().subscribe(
                calificaciones => {
                    this.calificaciones=calificaciones;
                });
             
        }

        addDeAcuerdo(): void{
            
        }

        showHideCreate(): void{
            this.showCreate=!this.showCreate;
        }

        onSelected(calificacion_id: number){
            console.log('corre');
            this.showCreate=false;
            this.showEdit=false;
            this.showView=true;
            this.calificacion_id=calificacion_id;
            this.selectedCalificacion=new CalificacionDetail();
            this.getCalificacionDetail();
        }

        showHideEdit(calificacion_id: number): void{
            console.log("llega a showHideEdit");
            console.log(calificacion_id);
            if(!this.showEdit || (this.showEdit && calificacion_id!=this.selectedCalificacion.id)){
               console.log("sí entra adentro");
                 this.showEdit=!this.showEdit;
                this.calificacion_id=calificacion_id;
            }
            else{
                this.showEdit=false;
                this.showView=true;
            }
        }

        getCalificacionDetail(): void{
            this.calificacionService.getCalificacionDetail(this.calificacion_id).subscribe(selectedCalificacion=>{
                this.selectedCalificacion=selectedCalificacion;
            })
        }

        updateCalificacion(): void{
            this.showEdit=false;
            this.showView=true;
        }

    ngOnInit() {
        this.showCreate = false;
        this.showEdit=false;
        this.selectedCalificacion=undefined;
        this.calificacion_id=undefined;
        this.getCalificaciones();
        
    }
        
    }
