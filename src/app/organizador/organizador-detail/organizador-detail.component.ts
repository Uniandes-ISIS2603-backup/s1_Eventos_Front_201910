import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { OrganizadorService } from '../organizador.service';

import { OrganizadorDetail } from '../organizador-detail';
import { Organizador } from '../organizador';

@Component({
  selector: 'app-organizador-detail',
  templateUrl: './organizador-detail.component.html',
  styleUrls: ['./organizador-detail.component.css']
})
export class OrganizadorDetailComponent implements OnInit {

    /**
    * The Organizador
    */
    @Input() organizadorDetail: OrganizadorDetail;
    
  constructor(
        private route: ActivatedRoute,
        private organizadorService: OrganizadorService 
  ) { }
  
      /**
    * El id del invitado que viene en el path get .../organizadores/organizador_id
    */
    organizador_id: number;
    /**
    * The method which obtains the organizador whose details we want to show
    */
    getOrganizadorDetail(): void {
        this.organizadorService.getOrganizadorDetail(this.organizador_id)
            .subscribe(organizadorDetail => {
                this.organizadorDetail = organizadorDetail
            });
    }

  ngOnInit() {
      
        this.organizador_id = +this.route.snapshot.paramMap.get('id');
        if (this.organizador_id){
        this.organizadorDetail = new OrganizadorDetail();
        this.getOrganizadorDetail();
  }

}
}
