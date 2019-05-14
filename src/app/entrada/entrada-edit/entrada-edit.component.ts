import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {EntradaService} from '../entrada.service';
import {EntradaDetail} from '../entrada-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-entrada-edit',
    templateUrl: './entrada-edit.component.html',
    styleUrls: ['./entrada-edit.component.css']
})
export class EntradaEditComponent implements OnInit{
    constructor(
        private dp: DatePipe,
        private entradaService: EntradaService,
        private toastrService: ToastrService,
    ){}

    @Input() entrada: EntradaDetail;

    @Output() cancel = new EventEmitter();

    @Output() update = new EventEmitter();

    cancelEdition(): void{
        this.cancel.emit();
    }

    editEntrada(): void{
        console.log("se update")
        this.entradaService.updateEntrada(this.entrada).subscribe(()=>{
            this.toastrService.success("La entrada se actualizó", "Entrada");
        });
        this.update.emit();
    }

    ngOnInit(){
        console.log("enrtaaaaasldkalñsd");
        console.log(this.entrada);
    }

    ngOnChanges() {
       this.ngOnInit();
    }
}
