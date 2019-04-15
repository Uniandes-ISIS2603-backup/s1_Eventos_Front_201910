import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrganizadorService } from '../organizador.service';
import { Organizador } from '../organizador';
import { OrganizadorDetail } from '../organizador-detail';

@Component({
  selector: 'app-organizador-detail',
  templateUrl: './organizador-detail.component.html',
  styleUrls: ['./organizador-detail.component.css']
})
export class OrganizadorDetailComponent implements OnInit {

  constructor(
    private organizadorService: OrganizadorService,
    private route: ActivatedRoute
  
  ) { }

 /**
    * The organizador whose details we want to show
    */
    organizadorDetail: OrganizadorDetail;



    /**
    * The organizador id retrieved from the address
    */
    organizador_id: number;
    
    showEdit: boolean;

    /**
    * The method which retrieves the eventos of a organizador
    */
    getOrganizadorDetail(): void {
        this.organizadorService.getOrganizadorDetail(this.organizador_id)
            .subscribe(organizadorDetail => {
                this.organizadorDetail = organizadorDetail
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the editorial so it is never considered as undefined
    */
    ngOnInit() {
        this.organizador_id = +this.route.snapshot.paramMap.get('id');
        this.organizadorDetail = new OrganizadorDetail();
        this.getOrganizadorDetail();
        this.showEdit = true;
    }

}
