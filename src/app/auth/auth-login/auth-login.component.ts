import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';
import { UsuarioService } from '../../usuario/usuario.service';

import { User } from '../user';
import { Usuario } from '../../usuario/usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private usuarioService: UsuarioService,
        private toastrService: ToastrService,
    ) { }

    user: User;
    usuarios: Usuario[];
    roles: String[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        var encontrado = false;
        for (var i = 0; i < this.usuarios.length && !encontrado; i++){
            if((this.usuarios[i].correoElectronico === this.user.correoElectronico)
                && (this.usuarios[i].contrasenia === this.user.contrasenia)){
                encontrado = true;
                localStorage.setItem('idUsuario', String(this.usuarios[i].id));
                console.log(localStorage.getItem('idUsuario'))
            }
        }
        if(encontrado === true){
            this.authService.login(this.user.rol);
            this.toastrService.success('Login exitoso')
        }
        else{
            this.toastrService.error('No se ha encontrado una cuenta con esos datos')
        }
    }
    
    getUsuarios(): void {
        this.usuarioService.getUsuarios()
            .subscribe(usuarios => {
                this.usuarios = usuarios;
            });
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.getUsuarios();
        this.roles = ['Administrador', 'Organizador', 'Cliente' ];
    }

}