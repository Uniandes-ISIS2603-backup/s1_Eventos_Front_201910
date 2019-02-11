/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.resources;

import co.edu.uniandes.csw.eventos.dtos.EventoDTO;
import java.util.List;
import java.util.logging.Logger;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;


/**
 *
 * @author estudiante
 */
@Path("eventos")
@Produces("application/json")
@Consumes("application/json")
@RequestScoped


public class EventoResource {
    
   private static final Logger LOGGER = Logger.getLogger(EventoResource.class.getName());
   
   @POST
   public EventoDTO createEvento(EventoDTO evento)
   {
   return evento;
   }
  
   
   @GET 
   public List<EventoDTO> getEvento(){
       return null;
   }
   
   @GET
   @Path("{eventosId: \\d+}")
   public EventoDTO getEvento(@PathParam("eventosId") Long eventosId){
       return null;
   }
   
   @PUT
   @Path("(eventosId: \\d+")
   public EventoDTO updateEvento (@PathParam("eventosId") Long eventosId, EventoDTO evento){
       return evento;
   }
   
   @DELETE
   @Path("(eventosId: \\d+)")
   public void deleteEvento (@PathParam("eventosId") Long eventosId){
       
   }
   
   
   
}
