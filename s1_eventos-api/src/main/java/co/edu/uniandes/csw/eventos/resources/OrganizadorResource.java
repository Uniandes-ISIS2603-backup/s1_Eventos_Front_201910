/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.resources;

import co.edu.uniandes.csw.eventos.dtos.OrganizadorDTO;
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
@Path("organizadores")
@Produces("application/json")
@Consumes("application/json")
@RequestScoped
public class OrganizadorResource {
    
    private static final Logger LOGGER = Logger.getLogger(OrganizadorResource.class.getName());

    @POST
    public OrganizadorDTO createOrganizador(OrganizadorDTO organizador) throws BusinessLogicException {
        
        return organizador;
    }

    @GET
    public List<OrganizadorDTO> getOrganizador() {
        return null;
    }

    @GET
    @Path("{organizadoresId: \\d+}")
    public OrganizadorDTO getOrganizador(@PathParam("organizadoresId") Long organizadoresId) throws WebApplicationException {
        return null;
    }

    @PUT
    @Path("{organizadoresId: \\d+}")
    public OrganizadorDTO updateOrganizador(@PathParam("organizadoresId") Long organizadoresId, OrganizadorDTO organizador) throws WebApplicationException {
        return organizador;
    }

    @DELETE
    @Path("{organizadoresId: \\d+}")
    public void deleteOrganizador(@PathParam("organizadoresId") Long organizadoresId) throws BusinessLogicException {
        
    }

}
