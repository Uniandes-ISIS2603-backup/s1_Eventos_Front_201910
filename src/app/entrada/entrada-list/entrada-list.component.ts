import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Entrada}  from '../entrada';
import {EntradaDetail} from '../entrada-detail';
import { EntradaService } from '../entrada.service';
import { ModalDialogService } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-entrada-list',
    templateUrl: './entrada-list.component.html',
    styleUrls: ['./entrada-list.component.css']
})
export class EntradaListComponent implements OnInit {
    constructor(
        private entradaService: EntradaService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
        ){}

        entradas: Entrada[];

        showCreate: boolean;

        entrada_id: number;

        showEdit: boolean;

        showView: boolean;

        selectedEntrada: Entrada;

        getEntradas(): void{
            this.entradaService.getEntradas().subscribe(
                entradas => {
                    this.entradas=entradas;
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
    this.showCreate = false;
    this.showEdit=false;
    this.selectedEntrada=undefined;
    this.entrada_id=undefined;
    this.getEntradas();
    }




}