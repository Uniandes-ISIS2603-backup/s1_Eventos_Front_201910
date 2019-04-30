import { Component, OnInit } from '@angular/core';
import { Entrada}  from '../entrada';
import { EntradaService } from '../entrada.service';

@Component({
    selector: 'app-entrada-list',
    templateUrl: './entrada-list.component.html',
    styleUrls: ['./entrada-list.component.css']
})
export class EntradaListComponent implements OnInit {
    constructor(
        private entradaService: EntradaService
        ){}

        entradas: Entrada[];

        showCreate: boolean;

        getEntradas(): void{
            this.entradaService.getEntradas().subscribe(
                entradas => {
                    this.entradas=entradas;
                });
        }

        showHideCreate(): void{
            this.showCreate=!this.showCreate;
        }

    ngOnInit() {
        this.showCreate = false;
        this.getEntradas();
    }
}