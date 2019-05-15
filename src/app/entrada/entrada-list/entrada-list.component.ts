import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Entrada}  from '../entrada';
import {EntradaDetail} from '../entrada-detail';
import { EntradaService } from '../entrada.service';
import { ModalDialogService } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-entrada-list',
    templateUrl: './entrada-list.component.html',
    styleUrls: ['./entrada-list.component.css']
})
export class EntradaListComponent implements OnInit {
    constructor(
    
            private route: ActivatedRoute,
        private entradaService: EntradaService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
        ){}

        entradas: Entrada[];

        showCreate: boolean;
 
        entrada_id: number;
 
     evento_id:number;

        showEdit: boolean;

        showView: boolean;

        selectedEntrada: EntradaDetail;

        
         getEntradas(): void{
            this.entradaService.getEventoEntradas(this.evento_id).subscribe(
                e => {
                    this.entradas=e;
                });
        }

     showHideCreate(): void{
            this.showCreate=!this.showCreate;
        }

    onSelected(entrada_id:number){
        this.showCreate=false;
        this.showEdit=false;
        this.showView=true;
        this.entrada_id=entrada_id;
        this.selectedEntrada=new EntradaDetail();
        this.getEntradaDetail();
    }

    showHideEdit(entrada_id:number): void{
        if(!this.showEdit || (this.showEdit && entrada_id!=this.selectedEntrada.id)){
            console.log("sí entra adentro");
              this.showEdit=!this.showEdit;
             this.entrada_id=entrada_id;
         }
         else{
             this.showEdit=false;
             this.showView=true;
         }
    }

    getEntradaDetail(): void{
        this.entradaService.getEntradaDetail(this.entrada_id).subscribe(selectedEntrada=>{
            this.selectedEntrada=selectedEntrada;
        })
    }

    showHideView(): void{
        this.showView=false;
    }

    updateCalificacion(): void{
        this.showEdit=false;
        this.showView=true;
    }

    ngOnInit() {
                this.evento_id = + this.route.snapshot.paramMap.get('id');
    this.showCreate = false;
    this.showEdit=false;
    this.selectedEntrada=undefined;
    this.entrada_id=undefined;
    this.getEntradas();
            this.showView=false;

    }




}