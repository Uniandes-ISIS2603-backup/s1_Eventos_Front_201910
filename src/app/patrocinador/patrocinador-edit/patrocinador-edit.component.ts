import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {PatrocinadorService} from '../patrocinador.service';

import {PatrocinadorDetail} from '../patrocinador-detail';


@Component({
  selector: 'app-patrocinador-edit',
  templateUrl: './patrocinador-edit.component.html',
  styleUrls: ['./patrocinador-edit.component.css']
})
export class PatrocinadorEditComponent implements OnInit {

  constructor(
 
        private patrocinadorService: PatrocinadorService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
  
  ) { }
  
      /**
    * The patrocinador which will be updated
    */
    patrocinador: PatrocinadorDetail

    patrocinador_id: number;
    
     /**
    * Retrieves the information of the patrocinador which will be updated
    */
    getPatrocinador(): void {
        this.patrocinadorService.getPatrocinadorDetail(this.patrocinador_id)
            .subscribe(patrocinador => {
            this.patrocinador = patrocinador;

        });
    }
    
     /**
    * Cancels the edition of the patrocinador
    */
    cancelEdition(): void {
        this.toastrService.warning('The patrocinador wasn\'t edited', 'Patrocinador edition');
        this.router.navigate(['/patrocinadores/' + this.patrocinador.id]);
    }
    
        /**
    * This function updates the patrocinador
    */
    updatePatrocinador(): void {
            this.patrocinadorService.updatePatrocinador(this.patrocinador)
                .subscribe(() => {
                    this.router.navigate(['/patrocinadores/' + this.patrocinador.id]);
                    this.toastrService.success("The patrocinador was successfully edited", 'Patrocinador edition');
                });
        
    }

  ngOnInit() {
      
      this.patrocinador_id = +this.route.snapshot.paramMap.get('id');
        if (this.patrocinador_id){
        this.getPatrocinador();
        }
  }

}
