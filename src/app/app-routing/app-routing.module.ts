import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { Agenda } from '../agenda/agenda';
import { AgendaListComponent } from '../agenda/agenda-list/agenda-list.component';
import { Factura } from '../factura/factura';
import { FacturaListComponent } from '../factura/factura-list/factura-list.component';
import { Invitado } from '../invitado/invitado';
import { InvitadoListComponent } from '../invitado/invitado-list/invitado-list.component';
import { FacturaDetailComponent } from '../factura/factura-detail/factura-detail.component';

import {OrganizadorListComponent} from '../organizador/organizador-list/organizador-list.component';
import {OrganizadorCreateComponent } from '../organizador/organizador-create/organizador-create.component';
import {OrganizadorEditComponent} from '../organizador/organizador-edit/organizador-edit.component';
import {OrganizadorDetailComponent} from '../organizador/organizador-detail/organizador-detail.component';

import {PatrocinadorListComponent} from '../patrocinador/patrocinador-list/patrocinador-list.component';
import {PatrocinadorCreateComponent} from '../patrocinador/patrocinador-create/patrocinador-create.component';
import {PatrocinadorDetailComponent} from '../patrocinador/patrocinador-detail/patrocinador-detail.component';
import {PatrocinadorEditComponent} from '../patrocinador/patrocinador-edit/patrocinador-edit.component';

import { Usuario } from '../usuario/usuario';
import { UsuarioListComponent } from '../usuario/usuario-list/usuario-list.component';
import { UsuarioDetailComponent } from '../usuario/usuario-detail/usuario-detail.component';

import { Multimedia } from '../multimedia/multimedia';
import { MultimediaListComponent } from '../multimedia/multimedia-list/multimedia-list.component';
import { MultimediaDetailComponent } from '../multimedia/multimedia-detail/multimedia-detail.component';

import {CalificacionListComponent} from '../calificacion/calificacion-list/calificacion-list.component';
import {MedioDePagoListComponent} from '../medioDePago/medioDePago-list/medioDePago-list.component';
import {EntradaListComponent} from '../entrada/entrada-list/entrada-list.component';
import { CalificacionDetailComponent } from '../calificacion/calificacion-detail/calificacion-detail.component';
import { EntradaDetailComponent } from '../entrada/entrada-detail/entrada-detail.component';
import { MedioDePagoDetailComponent } from '../medioDePago/medioDePago-detail/medioDePago-detail.component';
const routes: Routes = [

    {
        path: 'organizadores',
        children: [
            {
                path: 'list',
                component: OrganizadorListComponent
            },
            {
                path: 'add',
                component: OrganizadorCreateComponent  
            },
            {
                path: ':id/edit',
                component: OrganizadorEditComponent
            },
            {
                path: ':id',
                component: OrganizadorDetailComponent  
            }
            
        ]
    },
    {
        path: 'patrocinadores',
        children: [
            {
                path: 'list',
                component: PatrocinadorListComponent
            },
            {
                path: 'add',
                component: PatrocinadorCreateComponent  
            },
            {
                path: ':id',
                component: PatrocinadorDetailComponent  
            },
            {
                path: ':id/edit',
                component: PatrocinadorEditComponent
            }
        ]
    },
     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'agendas',
        children:[
            {
                path:'list',
                component: AgendaListComponent,
            }
        ]
    },
    {
        path: 'facturas',
        children:[
            {
                path:'list',
                component: FacturaListComponent,
            },
            {
                path: ':id',
                component: FacturaDetailComponent,
            }
        ]
    },
    {
        path: 'invitados',
        children:[
            {
                path:'list',
                component: InvitadoListComponent,
            }
        ]
    },
    {
        path: 'usuarios',
        children:[
            {
                path:'list',
                component: UsuarioListComponent,
            },
            {
                path:'999/calificaciones',
                component: CalificacionListComponent
            },
            {
                path:'999/mediosDePago',
                component: MedioDePagoListComponent
            },
            {
                path:'999/entradas',
                component: EntradaListComponent
            }
        ]
    },
    {
        path: 'multimedias',
        children:[
            {
                path:'list',
                component: MultimediaListComponent,
            }
        ]
    },
    {
        path: 'calificaciones',
        children:[
            {
                path:'list',
                component: CalificacionListComponent,
            },
            {
                path: ':id',
                component: CalificacionDetailComponent,
            }
        ]
    },
    {
        path: 'entradas',
        children:[
            {
                path:'list',
                component: EntradaListComponent,
            },
            {
                path: ':id',
                component: EntradaDetailComponent,
            }
        ]
    },
    {
        path: 'mediosDePago',
        children:[
            {
                path:'list',
                component: MedioDePagoListComponent,
            },
            {
                path: ':id',
                component: MedioDePagoDetailComponent,
            }
        ]
    },
    {
        path: 'eventos',
        children:[
            {
                path:'999/calificaciones',
                component: CalificacionListComponent,
            },
        ]
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
