import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import { FacturaService } from '../factura.service';
import { Factura } from '../factura';
import { FacturaDetail } from '../factura-detail';

@Component({
    selector: 'app-Factura-detail',
    templateUrl: './Factura-detail.component.html',
    styleUrls: ['./Factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param FacturaService The Factura service which communicates with the API
    * @param route The route which helps to retrieves the id of the Factura to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private FacturaService: FacturaService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        //This is added so we can refresh the view when one of the Facturas in
        //the "Other Facturas" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * The Factura's id retrieved from the path
    */
    Factura_id: number;

    /**
    * The Factura whose details are shown
    */
    FacturaDetail: FacturaDetail;

    /**
    * The other Facturas shown in the sidebar
    */
    other_Facturas: Factura[];

    /**
    * The suscription which helps to know when a new Factura
    * needs to be loaded
    */
    navigationSubscription;

    /**
    * The method which retrieves the details of the Factura that
    * we want to show
    */
    getFacturaDetail(): void {
         this.FacturaService.getFacturaDetail(this.Factura_id)
            .subscribe(FacturaDetail => {
                this.FacturaDetail = FacturaDetail;
            });
    }

    /**
    * This method retrieves all the Facturas in the Facturastore to show them in the list
    */
    getOtherFacturas(): void {
        this.FacturaService.getFacturas()
            .subscribe(Facturas => {
                this.other_Facturas = Facturas;
                this.other_Facturas = this.other_Facturas.filter(Factura => Factura.id !== this.Factura_id);
            });
    }

    /**
    * The method which initilizes the component
    * We need to initialize the Factura and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.Factura_id = + this.route.snapshot.paramMap.get('id');
        this.FacturaDetail = new FacturaDetail();
        this.getFacturaDetail();
        this.getOtherFacturas();
    }

    /**
    * This method helps to refresh the view when we need to load another Factura into it
    * when one of the other Facturas in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
