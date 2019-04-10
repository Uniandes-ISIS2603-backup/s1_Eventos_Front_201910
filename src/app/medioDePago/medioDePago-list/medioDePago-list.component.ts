import { Component, OnInit } from '@angular/core';
import {MedioDePago} from '../medioDePago';
import {MedioDePagoService} from '../medioDePago.service';

@Component({
    selector: 'app-medioDePago-list',
    templateUrl: './medioDePago-list.component.html',
    styleUrls: ['./medioDePago-list.component.css']
})
export class MedioDePagoListComponent implements OnInit {
    constructor(
        private medioDePagoService: MedioDePagoService
        ){}

        mediosDePago: MedioDePago[];

        showCreate: boolean;

        getMediosDePago(): void{
            this.medioDePagoService.getMediosDePago().subscribe(
                mediosDePago => {
                    this.mediosDePago=mediosDePago;
                    
                });
        }

        modifFecha(fec): string{
            let fechaM1: string[] = fec.toString().split("T");
            let fechaM2: string[] = fechaM1[0].split("-");
            let anio = fechaM2[0];
            let mes = fechaM2[1];
            return mes+"/"+anio;
        }

        showHideCreate(): void{
            this.showCreate=!this.showCreate;
        }

    ngOnInit() {
        this.showCreate = false;
        this.getMediosDePago();
    }
}