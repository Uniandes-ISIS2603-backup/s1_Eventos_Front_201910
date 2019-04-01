import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { UsuarioService } from '../usuario.service';

import { Usuario } from '../usuario';

@Component({
    selector: 'app-usuario-create',
    templateUrl: './usuario-create.component.html',
    styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param usuarioService The usuarios' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private usuarioService: UsuarioService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new usuario
    */
    usuario: Usuario;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an usuario
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new usuario
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new usuario
    */
    createUsuario(): void {
        this.usuarioService.createUsuario(this.usuario)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("El usuario fue creado", "Creacion de usuario");
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to create an usuario
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.usuario = new Usuario();
    }
}
