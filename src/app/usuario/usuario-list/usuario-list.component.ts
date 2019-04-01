import { Component, OnInit } from '@angular/core';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
    
    /**
    * Constructor for the component
    * @param usuarioService The services provider
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
        this.showCreate = !this.showCreate!
    }

    /**
    * This will initialize the component by retrieving the list of usuarios from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.getUsuarios();
    }
}
