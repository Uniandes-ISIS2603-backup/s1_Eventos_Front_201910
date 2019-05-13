import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PatrocinadorService } from '../patrocinador.service';
import { Patrocinador } from '../patrocinador';

@Component({
  selector: 'app-patrocinador-list',
  templateUrl: './patrocinador-list.component.html',
  styleUrls: ['./patrocinador-list.component.css']
})
export class PatrocinadorListComponent implements OnInit {

  constructor(
    private patrocinadorService: PatrocinadorService ) { }
    
     /**
    * The list of patrocinadores which belong to Eventos
    */
    @Input() patrocinadores: Patrocinador[];
    patrocinador_id: number;
    selectedPatrocinador : Patrocinador;
    evento_id:number;
    
    /**
    * Asks the service to update the list of patrocinadores
    */
    getPatrocinadores(): void{
            this.patrocinadorService.getEventoPatrocinadores(this.evento_id).subscribe(
                p => {
                    this.patrocinadores=p;
                });
        }
    
    


    /**
    * This will initialize the component by retrieving the list of patrocinadores from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.getPatrocinadores();
    }

}
