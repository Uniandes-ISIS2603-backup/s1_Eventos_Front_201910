import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {UbicacionService} from '../ubicacion.service';
import {Ubicacion} from '../ubicacion';



@Component({
  selector: 'app-ubicacion-edit',
  templateUrl: './ubicacion-edit.component.html',
  styleUrls: ['./ubicacion-edit.component.css']
})
export class UbicacionEditComponent implements OnInit {

  constructor(
        private ubicacionService: UbicacionService,        private router: Router,
        private route: ActivatedRoute,
        private toastrService: ToastrService
    ) {}

@Input() ubicacion: Ubicacion;

/**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new author
    */
    @Output() update = new EventEmitter();


  
/**
    * This function updates the ubicacion
    */
    editUbicacion(): void {
        this.ubicacionService.updateUbicacion(this.ubicacion)
            .subscribe(() => {
                this.router.navigate(['/ubicaciones/' + this.ubicacion.id]);
            });
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

 /**
    * This function will be called when the user chooses another author to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }
    
ngOnInit() {
        
    }


}
