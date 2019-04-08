import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {UsuarioService} from '../usuario.service';
import {UsuarioDetail} from '../usuario-detail';


@Component({
    selector: 'app-usuario-edit',
    templateUrl: './usuario-edit.component.html',
    styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param usuarioService The usuario's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private usuarioService: UsuarioService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the usuario that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() usuario_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an usuario
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new usuario
    */
    @Output() update = new EventEmitter();

    /**
    * The usuario to edit
    */
    usuario: UsuarioDetail;

    /**
    * Retrieves the information of the usuario
    */
    getUsuario(): void {
        this.usuarioService.getUsuarioDetail(this.usuario_id)
            .subscribe(usuario => {
                this.usuario = usuario;
            });
    }

    /**
    * Updates the usuario's information
    */
    editUsuario(): void {
        this.usuarioService.updateUsuario(this.usuario)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The usuario's information was updated", "Usuario edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the usuario
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.usuario = new UsuarioDetail();
        this.getUsuario();
    }

    /**
    * The function which is called every time the user chooses to edit a different usuario
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}