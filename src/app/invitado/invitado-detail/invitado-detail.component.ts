
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { InvitadoService } from '../invitado.service';

import { Invitado } from '../invitado';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-invitado-detail',
  templateUrl: './invitado-detail.component.html',
  styleUrls: ['./invitado-detail.component.css'],
  providers: [DatePipe]
})
export class InvitadoDetailComponent implements OnInit {

    @Input() invitadoDetail: Invitado;

    @Output() cancel = new EventEmitter();
    
  constructor(
        private route: ActivatedRoute,
        private invitadoService: InvitadoService 
  ) { }
  
    invitado_id: number;

    showEdit: boolean;
   
    getInvitadoDetail(): void {
        this.invitadoService.getInvitado(this.invitado_id)
            .subscribe(invitadoDetail => {
                this.invitadoDetail = invitadoDetail
            });
    }

    cancelView(): void{
      this.cancel.emit();
  }

    showHideEdit(): void{
      this.showEdit=!this.showEdit;
  }


  ngOnInit() {
      this.showEdit=false;
        this.invitado_id = +this.route.snapshot.paramMap.get('id');
        if (this.invitado_id){
        this.invitadoDetail = new Invitado();
        this.getInvitadoDetail();
  }

}
}

