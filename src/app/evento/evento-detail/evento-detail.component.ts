import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import { EventoService } from '../evento.service';
import { EventoDetail } from '../evento-detail';
import {Evento} from '../evento'

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {

  constructor(
  private eventoService: EventoService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
    ) { }

/**
    * The evento's id retrieved from the path
    */
    evento_id: number;

    /**
    * The evento whose details are shown
    */
    eventoDetail: EventoDetail;



 getEventoDetail(): void {
         this.eventoService.getEventoDetail(this.evento_id)
            .subscribe(eventoDetail => {
                this.eventoDetail = eventoDetail;
            });
    }

    

//ASOCIACIONES
    
        showCalif: boolean;
        showEntradas:boolean;
        
        
        showOrganizadores:boolean;
        showPatrocinadores:boolean;
        showMultimedias:boolean;
        showAgendas:boolean;
        showDescripcion:boolean;

        
        
        showCalificacion(): void{
        this.showCalif=true;
        this.showDescripcion=false;
        this.showEntradas=false;
        this.showOrganizadores=false;
        this.showPatrocinadores=false;
        this.showMultimedias=false;
        this.showAgendas=false;
    }
  
    
    showDescr(): void{
        this.showCalif=false;
        this.showDescripcion=true;
        this.showEntradas=false;
        this.showOrganizadores=false;
        this.showPatrocinadores=false;
        this.showMultimedias=false;
        this.showAgendas=false;
    }
    
    showEntrada(): void{
        this.showCalif=false;
        this.showDescripcion=false;
        this.showEntradas=true;
        this.showOrganizadores=false;
        this.showPatrocinadores=false;
        this.showMultimedias=false;
        this.showAgendas=false;
    }
    
    showOrganizador(): void{
        this.showCalif=false;
        this.showDescripcion=false;
        this.showEntradas=false;
        this.showOrganizadores=true;
        this.showPatrocinadores=false;
        this.showMultimedias=false;
        this.showAgendas=false;
    }
    
    showPatrocinador(): void{
        this.showCalif=false;
        this.showDescripcion=false;
        this.showEntradas=false;
        this.showOrganizadores=false;
        this.showPatrocinadores=true;
        this.showMultimedias=false;
        this.showAgendas=false;
    }

showMultimedia(): void{
        this.showCalif=false;
        this.showDescripcion=false;
        this.showEntradas=false;
        this.showOrganizadores=false;
        this.showPatrocinadores=false;
        this.showMultimedias=true;
        this.showAgendas=false;
    }
    
    showAgenda(): void{
        this.showCalif=false;
        this.showDescripcion=false;
        this.showEntradas=false;
        this.showOrganizadores=false;
        this.showPatrocinadores=false;
        this.showMultimedias=false;
        this.showAgendas=true;
    }
 ngOnInit() {
        this.evento_id = + this.route.snapshot.paramMap.get('id');
        console.log("Este es el id del evento"+this.evento_id);
        this.eventoDetail = new EventoDetail();
        this.getEventoDetail();
        this.showCalif=false;
        this.showDescripcion=false;
        this.showEntradas=false;
        this.showOrganizadores=false;
        this.showPatrocinadores=false;
        this.showMultimedias=false;
        this.showAgendas=false;
        
    }

}
