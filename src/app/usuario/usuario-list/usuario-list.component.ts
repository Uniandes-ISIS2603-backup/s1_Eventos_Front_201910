import {Component, OnInit} from '@angular/core';

import {Usuario} from '../usuario';
import {UsuarioService} from '../usuario.service';

/**
* The component for the list of usuarios in the BookStore
*/
@Component({
    selector: 'app-usuario',
    templateUrl: './usuario-list.component.html',
    styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param usuarioService The usuario's services provider
    */
    constructor(
        private usuarioService: UsuarioService,
    ) {}

    /**
    * The list of usuarios
    */
    usuarios: Usuario[];

    /**
    * Shows or hides the create component
    */
    showCreate: boolean;

    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;

    /**
     * The id of the usuario being edited.
     */
    usuario_edit_id: number;

    /**
    * Asks the service to update the list of usuarios
    */
    getUsuarios(): void {
        this.usuarioService.getUsuarios()
            .subscribe(usuarios => {
                this.usuarios = usuarios;
            });
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showEdit = false;
        this.showCreate = !this.showCreate!
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(usuario_id: number): void {
        if (!this.showEdit || (this.showEdit && usuario_id != this.usuario_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.usuario_edit_id = usuario_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateUsuario(): void {
        this.showEdit = false;
    }

    /**
    * This will initialize the component by retrieving the list of usuarios from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getUsuarios();
    }
}