import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import {NgForm} from '@angular/forms';
import { EntradaService } from '../entrada.service';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { Entrada } from '../entrada';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-entrada-create',
  templateUrl: './entrada-create.component.html',
  styleUrls: ['./entrada-create.component.css'],
  providers: [DatePipe]
})
export class EntradaCreateComponent implements OnInit {

  constructor(
    private dp: DatePipe,
     private entradaService: EntradaService,
     private toastrService: ToastrService,
         private route: ActivatedRoute,

  ) { }
  
   /**
    * El nuevo organizador
    */
    entrada: Entrada;

    evento_id: number;

/**
    * The output which tells the parent component
    * that the user no longer wants to create an organizador
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new organizador
    */
    @Output() create = new EventEmitter();

    createEntrada():Entrada{
      this.entradaService.createEventoEntrada(this.evento_id,this.entrada)
          .subscribe(e=>{
        this.entrada=e;
        this.create.emit();
        this.toastrService.success("La entrada fue creada","Creacion");
      })
      return this.entrada;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    
  ngOnInit() {
      this.entrada = new Entrada();
          this.evento_id = + this.route.snapshot.paramMap.get('id');

  }

}