/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Patrocinador } from '../patrocinador/patrocinador';
import {Organizador } from '../organizador/organizador';
import {Multimedia } from '../multimedia/multimedia';
import {Agenda } from '../agenda/agenda';
import {Usuario } from '../usuario/usuario';
import {Entrada } from '../entrada/entrada';
import {Calificacion } from '../calificacion/calificacion';
import {Evento }from './evento'
export class EventoDetail extends Evento{
    
    patrocinadores:Patrocinador[];
    organizadores:Organizador[];
    multimedias: Multimedia[];
    agendas: Agenda[];
    usuarios: Usuario[];
    entradas: Entrada[];
    calificaciones:Calificacion[];
}
