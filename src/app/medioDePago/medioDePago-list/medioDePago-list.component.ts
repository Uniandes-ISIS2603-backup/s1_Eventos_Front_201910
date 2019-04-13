import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {MedioDePago} from '../medioDePago';
import {MedioDePagoService} from '../medioDePago.service';
import { ModalDialogService } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import {MedioDePagoDetail} from '../medioDePago-detail';

@Component({
    selector: 'app-medioDePago-list',
    templateUrl: './medioDePago-list.component.html',
    styleUrls: ['./medioDePago-list.component.css']
})
export class MedioDePagoListComponent implements OnInit {
    constructor(
        private medioDePagoService: MedioDePagoService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
        ){}

        mediosDePago: MedioDePago[];

        medioDePago_id: number;

        showCreate: boolean;

        showEdit: boolean;

        showView: boolean;

        selectedMedioDePago: MedioDePago;

        getMediosDePago(): void{
            this.medioDePagoService.getMediosDePago().subscribe(
                mediosDePago => {
                    this.mediosDePago=mediosDePago;
                    
                });
        }

       
        showHideEdit(medioDePago_id: number): void{
            console.log("llega a showHideEdit");
            console.log(medioDePago_id);
            if(!this.showEdit || (this.showEdit && medioDePago_id!=this.selectedMedioDePago.id)){
                 this.showEdit=!this.showEdit;
                this.medioDePago_id=medioDePago_id;
            }
            else{
                this.showEdit=false;
                this.showView=true;
            }
        }

        onSelected(medioDePago_id: number){
            console.log('corre');
            this.showCreate=false;
            this.showEdit=false;
            this.showView=true;
            this.medioDePago_id=medioDePago_id;
            this.selectedMedioDePago=new MedioDePagoDetail();
            this.getMedioDePagoDetail();
        }

        getMedioDePagoDetail(): void{
            this.medioDePagoService.getMedioDePagoDetail(this.medioDePago_id).subscribe(selectedMedioDePago=>{
                this.selectedMedioDePago=selectedMedioDePago;
            })
        }

        showHideCreate(): void{
            this.showCreate=!this.showCreate;
        }

        showHideView(): void{
            this.showView=false;
        }

        updateMedioDePago(): void{
            this.showEdit=false;
            this.showView=true;
        }

    ngOnInit() {
        this.showCreate = false;
        this.showEdit=false;
        this.selectedMedioDePago=undefined;
        this.medioDePago_id=undefined;
        this.getMediosDePago();
    }
}