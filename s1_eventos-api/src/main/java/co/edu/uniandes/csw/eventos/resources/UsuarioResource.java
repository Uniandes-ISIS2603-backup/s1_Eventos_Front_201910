/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.resources;

import co.edu.uniandes.csw.eventos.dtos.UsuarioDTO;
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
@Path("usuarios")
@Produces("application/json")
@Consumes("application/json")
@RequestScoped
public class UsuarioResource {
    private static final Logger LOGGER = Logger.getLogger(UsuarioResource.class.getName());
    
    @POST
    public UsuarioDTO createUsuario(UsuarioDTO usuario){
        return usuario;
    }
    @DELETE
    @Path("{usuarioId: \\d+}")
    public void deleteUsuario(@PathParam("usuarioId") Long usuarioId) {
        
    }
    @GET
    @Path("{usuarioId: \\d+}")
    public UsuarioDTO getUsuario(@PathParam("usuarioId") Long usuarioId) throws WebApplicationException {
        return null;
    }
    @PUT
    @Path("{usuarioId: \\d+}")
    public UsuarioDTO updateUsuario(@PathParam("usuarioId") Long usuarioId, UsuarioDTO usuario) throws WebApplicationException {
        return usuario;
    }
}
