import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {MedioDePago} from '../medioDePago';
import {MedioDePagoService} from '../medioDePago.service';
import { ModalDialogService } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import {MedioDePagoDetail} from '../medioDePago-detail';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que lista todos los medios de pago
 */
@Component({
    selector: 'app-medioDePago-list',
    templateUrl: './medioDePago-list.component.html',
    styleUrls: ['./medioDePago-list.component.css']
})
export class MedioDePagoListComponent implements OnInit {
    /**
     * Constructor del componente medio de pago list
     * @param medioDePagoService 
     * @param modalDialogService 
     * @param viewRef 
     * @param toastrService 
     */
    constructor(
        private medioDePagoService: MedioDePagoService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
        ){}

        /**
         * Lista de todos los medios de pago
         */
        mediosDePago: MedioDePago[];

        /**
         * Numero id del medio de pago que se vera en detail
         */
        medioDePago_id: number;

        /**
         * Variable que controla la aparicion del componente create
         */
        showCreate: boolean;

        /**
         * Variable que controla la aparicion del componente edit
         */
        showEdit: boolean;

        usuario_id: number;

        /**
         * Variable que controla la aparicion del componente showView
         */
        showView: boolean;

        /**
         * Variable que almacena el medio de pago seleccionado, para enviarselo al componente detail y que este muestre
         * toda la info
         */
        selectedMedioDePago: MedioDePago;

        /**
         * Inicializa el arreglo de medios de pago trayendo la info desde service
         */
        getMediosDePago(): void{
            this.medioDePagoService.getUsuarioMediosDePago(this.usuario_id).subscribe(
                mediosDePago => {
                    this.mediosDePago=mediosDePago;
                    
                });
        }

       /**
        * Metodo que controla la aparicion del componente edit para un detail
        * @param medioDePago_id 
        */
        showHideEdit(medioDePago_id: number): void{
            if(!this.showEdit || (this.showEdit && medioDePago_id!=this.selectedMedioDePago.id)){
                 this.showEdit=!this.showEdit;
                this.medioDePago_id=medioDePago_id;
            }
            else{
                this.showEdit=false;
                this.showView=true;
            }
        }

        /**
         * Metodo que establece las condiciones que se deben dar cuando un usuario de clic sobre un elemento de la lista
         * para que seguidamente aparezca el detail de dicho elemento
         * @param medioDePago_id id del medio de pago seleccionado
         */
        onSelected(medioDePago_id: number){
            this.showCreate=false;
            this.showEdit=false;
            this.showHideView();
            this.medioDePago_id=medioDePago_id;
            this.selectedMedioDePago=new MedioDePagoDetail();
            this.getMedioDePagoDetail();
        }

        /**
         * Metodo que obtiene el medio de pago detail
         */
        getMedioDePagoDetail(): void{
            this.medioDePagoService.getMedioDePagoDetail(this.medioDePago_id).subscribe(selectedMedioDePago=>{
                this.selectedMedioDePago=selectedMedioDePago;
            })
        }

        /**
         * Metodo que se encarga de establecer la condicion para que el componente create aparezca o se esconda
         */
        showHideCreate(): void{
            this.showCreate=!this.showCreate;
        }

        /**
         * Metodo que se encarga de establecer la condicion para que el componente detail aparezca o se esconda
         */
        showHideView(): void{
            if(this.showView==true)
            this.showView=false;
            else
            this.showView=true;
            console.log(this.showView);
        }

        updateMedioDePago(): void{
            this.showEdit=false;
            this.showView=true;
        }

        /**
         * Al crear el componente, generar las condiciones que se establecen al interior del metodo
         */
    ngOnInit() {
        this.usuario_id=+this.route.snapshot.paramMap.get('id');
        this.showCreate = false;
        this.showEdit=false;
        this.selectedMedioDePago=undefined;
        this.medioDePago_id=undefined;
        this.getMediosDePago();
    }
}