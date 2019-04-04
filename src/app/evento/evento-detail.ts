/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Patrocinador} from'../patrocinador';
import {Organizador} from'../organizador';
import {Multimedia} from'../multimedia';
import {Agenda} from'../agenda';
import {Usuario} from'../usuario';
import {Entrada} from'../entrada';
import {Calificacion} from'../calificacion';
import {Evento}from './evento'
export class EventoDetail extends Evento{
    
    patrocinadores:Patrocinador[];
    organizadores:Organizador[];
    multimedias: Multimedia[];
    agendas: Agenda[];
    usuario: Usuario[];
    entradas: Entrada[];
    calificaciones:Calificacion[];
    
}
