import { Component, Input, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { PatrocinadorService } from '../patrocinador.service';

import { PatrocinadorDetail } from '../patrocinador-detail';
import { Patrocinador } from '../patrocinador';

@Component({
  selector: 'app-patrocinador-detail',
  templateUrl: './patrocinador-detail.component.html',
  styleUrls: ['./patrocinador-detail.component.css']
})
export class PatrocinadorDetailComponent implements OnInit {

    /**
    * The Patrocinador
    */
   @Input() patrocinadorDetail: PatrocinadorDetail;
    
    /**
    * The constructor of the component
    * @param patrocinadorService The Patrocinador service which communicates with the API
    * @param route The route which helps to retrieves the id of the patrocinador to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
  constructor(
        private route: ActivatedRoute,
        private patrocinadorService: PatrocinadorService,
  ) { }
  
      /**
    * El id del invitado que viene en el path get .../patrocinadores/patrocinador_id
    */
    patrocinador_id: number;
    
    /**
    * The method which obtains the patrocinador whose details we want to show
    */
    getPatrocinadorDetail(): void {
        this.patrocinadorService.getPatrocinadorDetail(this.patrocinador_id)
            .subscribe(patrocinadorDetail => {
                this.patrocinadorDetail = patrocinadorDetail
            });
    }
    
    /**
    * The method which initializes the component.
    * We need to create the author so it is never considered as undefined
    */
    ngOnInit() {
        this.patrocinador_id = +this.route.snapshot.paramMap.get('id');
        if (this.patrocinador_id){
        this.patrocinadorDetail = new PatrocinadorDetail();
        this.getPatrocinadorDetail();
        }
    }

}
