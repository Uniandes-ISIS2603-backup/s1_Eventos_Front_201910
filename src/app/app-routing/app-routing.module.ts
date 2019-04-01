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
import {OrganizadorDetailComponent } from '../organizador/organizador-detail/organizador-detail.component';

import {PatrocinadorListComponent} from '../patrocinador/patrocinador-list/patrocinador-list.component';
import {PatrocinadorDetailComponent } from '../patrocinador/patrocinador-detail/patrocinador-detail.component';

const routes: Routes = [

    {
        path: 'organizadores',
        children: [
            {
                path: 'list',
                component: OrganizadorListComponent
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
                path: ':id',
                component: PatrocinadorDetailComponent
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
        component: Agenda,
        children:[
            {
                path:'list',
                component: AgendaListComponent,
            }
        ]
    },
    {
        path: 'facturas',
        component: Factura,
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
        component: Invitado,
        children:[
            {
                path:'list',
                component: InvitadoListComponent,
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
