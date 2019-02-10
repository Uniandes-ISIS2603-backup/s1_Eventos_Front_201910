/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.resources;

import co.edu.uniandes.csw.eventos.dtos.PatrocinadorDTO;
import co.edu.uniandes.csw.eventos.exceptions.BusinessLogicException;
import java.util.List;
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
 * @author Paula Molina
 */
@Path("patrocinadores")
@Produces("application/json")
@Consumes("application/json")
@RequestScoped
public class PatrociandorResource {
    
    private static final Logger LOGGER = Logger.getLogger(OrganizadorResource.class.getName());

    @POST
    public PatrocinadorDTO createPatrocinador(PatrocinadorDTO patrocinador) throws BusinessLogicException {
        
        return patrocinador;
    }

    @GET
    public List<PatrocinadorDTO> getPatrocinador() {
        
        return null;
    }

    @GET
    @Path("{patrocinadoresId: \\d+}")
    public PatrocinadorDTO getPatrocinador(@PathParam("patrocinadoresId") Long patrocinadoresId) throws WebApplicationException {
        
        return null;
    }

    @PUT
    @Path("{patrocinadoresId: \\d+}")
    public PatrocinadorDTO updatePatrocinador(@PathParam("patrocinadoresId") Long patrocinadoresId, PatrocinadorDTO patrocinador) throws WebApplicationException {
        
        return patrocinador;
    }

    @DELETE
    @Path("{patrocinadoresId: \\d+}")
    public void deletePatrocinador(@PathParam("patrocinadoresId") Long patrocinadoresId) throws BusinessLogicException {
        
    }
}
