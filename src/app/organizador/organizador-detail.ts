/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
  import { Organizador } from './organizador';
  import { Evento } from '../evento/evento';
  
 export class OrganizadorDetail extends Organizador {
     
    /**
     * Los eventos del organizador
     */
    eventos: Evento[];
 }


