import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { UsuarioDetail } from '../usuario-detail';

@Component({
    selector: 'app-usuario-detail',
    templateUrl: './usuario-detail.component.html',
    styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

    /**
    * The component's constructor
    * @param usuarioService The usuario's service
    * @param route The route element which helps to obtain the usuario's id
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private usuarioService: UsuarioService,
        private route: ActivatedRoute
    ) { }

    /**
    * The usuario whose details we want to show
    */
    usuarioDetail: UsuarioDetail;



    /**
    * The usuario's id retrieved from the address
    */
    usuario_id: number;

    /**
    * The method which retrieves the detail of an usuario
    */
    getUsuarioDetail(): void {
        this.usuarioService.getUsuarioDetail(this.usuario_id)
            .subscribe(usuarioDetail => {
                this.usuarioDetail = usuarioDetail
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the usuario so it is never considered as undefined
    */
    ngOnInit() {
        this.usuario_id = +this.route.snapshot.paramMap.get('id');
        this.usuarioDetail = new UsuarioDetail();
        this.getUsuarioDetail();
    }

}