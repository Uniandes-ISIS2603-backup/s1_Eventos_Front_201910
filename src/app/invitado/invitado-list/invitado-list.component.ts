import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


import { Invitado } from '../../invitado/invitado';
import { InvitadoService } from '../../invitado/invitado.service';
@Component({
    selector: 'app-invitado-list',
    templateUrl: './invitado-list.component.html',
    styleUrls: ['./invitado-list.component.css']
})
export class InvitadoListComponent implements OnInit {

    /**
    * The list of Invitados to display
    */
    @Input() Invitados: Invitado[];

    /**
    * The component's constructor
    */
    constructor(private InvitadoService: InvitadoService,  private route: ActivatedRoute) {  }
    
    allInvitados:string = 'no';
    /**
    * This method retrieves all the Invitados in the Invitadostore to show them in the list
    */
    getInvitados(): void {
        this.InvitadoService.getInvitados()
            .subscribe(Invitados => {
                this.Invitados = Invitados;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
     this.route.queryParams
      .filter(params => params.allInvitados)
      .subscribe(params => {
        console.log(params); 

        this.allInvitados = params.allInvitados;
        console.log(this.allInvitados); 
      });
      if (this.allInvitados == 'yes'){
          console.log("allInvitados");
      
       this.getInvitados();
       }
    }
    
}
