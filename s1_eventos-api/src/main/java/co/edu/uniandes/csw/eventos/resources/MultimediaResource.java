/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.resources;

import co.edu.uniandes.csw.eventos.dtos.MultimediaDTO;
import co.edu.uniandes.csw.eventos.dtos.OrganizadorDTO;
import java.util.logging.Level;
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
@Path("multimedia")
@Produces("application/json")
@Consumes("application/json")
@RequestScoped

public class MultimediaResource {
    private static final Logger LOGGER = Logger.getLogger(MultimediaResource.class.getName());
    
    @POST
    public MultimediaDTO createMultimedia(MultimediaDTO multimedia){
        return multimedia;
    }
    @DELETE
    @Path("{multimediaId: \\d+}")
    public void deleteMultimedia(@PathParam("multimediaId") Long multimediaId) {
        
    }
    @GET
    @Path("{multimediaId: \\d+}")
    public MultimediaDTO getMultimedia(@PathParam("multimediaId") Long multimediaId) throws WebApplicationException {
        return null;
    }
    @PUT
    @Path("{multimediaId: \\d+}")
    public MultimediaDTO updateMultimedia(@PathParam("multimediaId") Long multimediaId, MultimediaDTO multimedia) throws WebApplicationException {
        return multimedia;
    }
}
