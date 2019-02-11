/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.resources;

import co.edu.uniandes.csw.eventos.dtos.MemoriaDTO;
import co.edu.uniandes.csw.eventos.dtos.MultimediaDTO;
import java.util.logging.Logger;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;

/**
 *
 * @author Nicolas Diaz
 */
@Path("memoria")
@Produces("application/json")
@Consumes("application/json")
@RequestScoped
public class MemoriaResource {
    private static final Logger LOGGER = Logger.getLogger(MemoriaResource.class.getName());
    
    @POST
    public MemoriaDTO createMemoria(MemoriaDTO memoria){
        return memoria;
    }
    @DELETE
    @Path("{memoriaId: \\d+}")
    public void deleteMemoria(@PathParam("memoriaId") Long memoriaId) {
        
    }
    @GET
    @Path("{memoriaId: \\d+}")
    public MemoriaDTO getMemoria(@PathParam("memoriaId") Long memoriaId) throws WebApplicationException {
        return null;
    }
    @PUT
    @Path("{memoriaId: \\d+}")
    public MemoriaDTO updateMemoria(@PathParam("memoriaId") Long memoriaId, MemoriaDTO memoria) throws WebApplicationException {
        return memoria;
    }
}
