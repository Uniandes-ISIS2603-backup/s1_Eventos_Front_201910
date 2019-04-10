import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { MedioDePagoService } from '../medioDePago.service';
import { MedioDePago } from '../medioDePago';

@Component({
  selector: 'app-medioDePago-create',
  templateUrl: './medioDePago-create.component.html',
  styleUrls: ['./medioDePago-create.component.css']
})
export class MedioDePagoCreateComponent implements OnInit {

  constructor(
     private medioDePagoService: MedioDePagoService
  ) { }
  
    medioDePago: MedioDePago;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

    cancelCreation(): void {
        this.cancel.emit();
    }
    
  ngOnInit() {
      this.medioDePago = new MedioDePago();
  }

}