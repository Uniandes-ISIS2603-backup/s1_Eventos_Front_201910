import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';

import {CalificacionListComponent} from '../calificacion/calificacion-list/calificacion-list.component';
import {EntradaListComponent} from '../entrada/entrada-list/entrada-list.component';
import {MedioDePagoListComponent} from '../medioDePago/medioDePago-list/medioDePago-list.component';


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
import { UsuarioEditComponent } from '../usuario/usuario-edit/usuario-edit.component';
import { UsuarioCreateComponent } from '../usuario/usuario-create/usuario-create.component';
import { UsuarioDetailComponent } from '../usuario/usuario-detail/usuario-detail.component';

import { Multimedia } from '../multimedia/multimedia';
import { MultimediaListComponent } from '../multimedia/multimedia-list/multimedia-list.component';
import { MultimediaEditComponent } from '../multimedia/multimedia-edit/multimedia-edit.component';
import { MultimediaCreateComponent } from '../multimedia/multimedia-create/multimedia-create.component';
import { MultimediaDetailComponent } from '../multimedia/multimedia-detail/multimedia-detail.component';

import {Evento} from '../evento/evento';
import {EventoDetailComponent} from  '../evento/evento-detail/evento-detail.component';
import {EventoListComponent} from  '../evento/evento-list/evento-list.component';
import {EventoCreateComponent} from '../evento/evento-create/evento-create.component';
import {EventoEditComponent} from '../evento/evento-edit/evento-edit.component';

import {Ubicacion} from '../ubicacion/ubicacion';
import {UbicacionDetailComponent} from  '../ubicacion/ubicacion-detail/ubicacion-detail.component';
import {UbicacionListComponent} from  '../ubicacion/ubicacion-list/ubicacion-list.component';
import {UbicacionCreateComponent} from '../ubicacion/ubicacion-create/ubicacion-create.component';
import {UbicacionEditComponent} from '../ubicacion/ubicacion-edit/ubicacion-edit.component';


import { CalificacionDetailComponent } from '../calificacion/calificacion-detail/calificacion-detail.component';
import { EntradaDetailComponent } from '../entrada/entrada-detail/entrada-detail.component';
import { MedioDePagoDetailComponent } from '../medioDePago/medioDePago-detail/medioDePago-detail.component';

const routes: Routes = [
    {
     path:'eventos',
        children:[
            {   
                path: 'list',
                component: EventoListComponent
            },
            {
                path: ':id',
                component: EventoDetailComponent,
                //runGuardsAndResolvers: 'always'
            },
            {
                path: 'add',
                component: EventoCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN', 'PATROCINADOR']
                    }
                }
            },
            {
                path: ':id/edit',
                component: EventoEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN', 'PATROCINADOR']
                    }
                }
                
            } 
        ]
    } ,
    {
     path:'ubicaciones',
        children:[
            {   
                path: 'list',
                component: UbicacionListComponent
            },
            {
                path: ':id',
                component: UbicacionDetailComponent,
                //runGuardsAndResolvers: 'always'
            },
            {
                path: 'add',
                component: UbicacionCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
            },
            {
                path: ':id/edit',
                component: UbicacionEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
                
            } 
        ]
    } ,
        
    {
        path: 'organizadores',
        children: [
            {
                path: 'list',
                component: OrganizadorListComponent
            },
            {
                path: 'add',
                component: OrganizadorCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                } 
            },
            {
                path: ':id/edit',
                component: OrganizadorEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
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
                component: PatrocinadorCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }  
            },
            {
                path: ':id',
                component: PatrocinadorDetailComponent  
            },
            {
                path: ':id/edit',
                component: PatrocinadorEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
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
                path: 'list',
                component: UsuarioListComponent
            },
            {
                path: 'add',
                component: UsuarioCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id/edit',
                component: UsuarioEditComponent
            },
            {
                path: ':id',
                component: UsuarioDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'multimedias',
        children:[
            {
                path: 'list',
                component: MultimediaListComponent
            },
            {
                path: 'add',
                component: MultimediaCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id/edit',
                component: MultimediaEditComponent
            },
            {
                path: ':id',
                component: MultimediaDetailComponent,
                runGuardsAndResolvers: 'always'
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
