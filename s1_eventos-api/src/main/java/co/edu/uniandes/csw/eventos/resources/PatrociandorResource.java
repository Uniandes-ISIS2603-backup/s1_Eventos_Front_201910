/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.resources;

import co.edu.uniandes.csw.eventos.dtos.PatrocinadorDTO;
import co.edu.uniandes.csw.eventos.ejb.PatrocinadorLogic;
import co.edu.uniandes.csw.eventos.entities.PatrocinadorEntity;
import co.edu.uniandes.csw.eventos.exceptions.BusinessLogicException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
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

    @Inject 
    private PatrocinadorLogic patrocinadorLogic;
    
    /**
     * Crea un nuevo patrocinador con la informacion que se recibe en el cuerpo de la
     * petición y se regresa un objeto identico con un id auto-generado por la
     * base de datos.
     *
     * @param patrocinador {@link PatrocinadorDTO} - EL patrocinador que se desea guardar.
     * @return JSON {@link PatrocinadorDTO} - El patrocinador guardado con el atributo id autogenerado.
     * @throws BusinessLogicException Si el patrocinador a persistir ya existe o si el nombre, descripcion y/o imagen no son validos
     */
    @POST
    public PatrocinadorDTO createPatrocinador(PatrocinadorDTO patrocinador) throws BusinessLogicException {
        
        PatrocinadorEntity patrocinadorEntity = patrocinador.toEntity();
        PatrocinadorEntity nuevoPatrocinadorEntity = patrocinadorLogic.createPatrocinador(patrocinadorEntity);
        PatrocinadorDTO nuevoOrganizadorDTO = new PatrocinadorDTO(nuevoPatrocinadorEntity);
        
        return nuevoOrganizadorDTO;
    }

    /**
     * Busca y devuelve todos los patrocinadores que existen en la aplicacion.
     *
     * @return JSONArray {@link PatrocinadorDetailDTO} - Los patrocinadores encontrados en la
     * aplicación. Si no hay ninguno retorna una lista vacía.
     */
    @GET
    public List<PatrocinadorDTO> getPatrocinadores() {
        
        LOGGER.info("PatrocinadorResource getPatrocinadores: input: void");
        List<PatrocinadorDTO> listaPatrocinadores = listEntity2DTO(patrocinadorLogic.getPatrocinadores());
        LOGGER.log(Level.INFO, "PatrocinadorResource getPatrocinadores: output: {0}", listaPatrocinadores.toString());
        return listaPatrocinadores;
    }

    /**
     * Busca el autor con el id asociado recibido en la URL y lo devuelve.
     *
     * @param patrocinadoresId Identificador del patrocinador que se esta buscando. Este debe
     * ser una cadena de dígitos.
     * @return JSON {@link PatrocinadorDetailDTO} - El patrocinador buscado
     * @throws WebApplicationException {@link WebApplicationExceptionMapper} -
     * Error de lógica que se genera cuando no se encuentra el patrocinador.
     */
    @GET
    @Path("{patrocinadoresId: \\d+}")
    public PatrocinadorDTO getPatrocinador(@PathParam("patrocinadoresId") Long patrocinadoresId) throws WebApplicationException {
        
        LOGGER.log(Level.INFO, "PatrocinadorResource getPatrocinador: input: {0}", patrocinadoresId);
        PatrocinadorEntity entity = patrocinadorLogic.getPatrocinador(patrocinadoresId);
        if (entity == null) {
            throw new WebApplicationException("El recurso /patrocinadores/" + patrocinadoresId + " no existe.", 404);
        }
        PatrocinadorDTO patrocinadorDTO = new PatrocinadorDTO(patrocinadorLogic.getPatrocinador(patrocinadoresId));
        LOGGER.log(Level.INFO, "PatrocinadorResource getPatrocinador: output: {0}", patrocinadorDTO.toString());
        return patrocinadorDTO;
    }

    /**
     * Actualiza el patrocinador con el id recibido en la URL con la información que se
     * recibe en el cuerpo de la petición.
     *
     * @param patrocinadoresId Identificador del patrocinador que se desea actualizar. Este
     * debe ser una cadena de dígitos.
     * @param patrocinador {@link PatrocinadorDetailDTO} El patrocinador que se desea guardar.
     * @return JSON {@link PatrocinadorDetailDTO} - El patrocinador guardado.
     * @throws WebApplicationException {@link WebApplicationExceptionMapper} -
     * Error de lógica que se genera cuando no se encuentra el patrocinador a
     * actualizar.
     */
    @PUT
    @Path("{patrocinadoresId: \\d+}")
    public PatrocinadorDTO updatePatrocinador(@PathParam("patrocinadoresId") Long patrocinadoresId, PatrocinadorDTO patrocinador) throws BusinessLogicException {
        
        LOGGER.log(Level.INFO, "PatrocinadorResource updatePatrocinador: input: patrocinadoresId: {0} , patrocinador: {1}", new Object[]{patrocinadoresId, patrocinador.toString()});
        patrocinador.setId(patrocinadoresId);
        PatrocinadorEntity entity = patrocinadorLogic.getPatrocinador(patrocinadoresId);
        if (entity == null) {
            throw new WebApplicationException("El recurso /patrocinadores/" + patrocinadoresId + " no existe.", 404);
        }
        PatrocinadorDTO detailDTO = new PatrocinadorDTO(patrocinadorLogic.updatePatrocinador(patrocinadoresId, patrocinador.toEntity()));
        LOGGER.log(Level.INFO, "PatrocinadorResource updatePatrocinador: output: {0}", detailDTO.toString());
        return detailDTO;    
    }

    /**
     * Borra el patrocinador con el id asociado recibido en la URL.
     *
     * @param patrocinadoresId Identificador del patrocinador que se desea borrar. Este debe
     * ser una cadena de dígitos.
     * @throws co.edu.uniandes.csw.eventos.exceptions.BusinessLogicException
     * si el autor tiene eventos asociados
     * @throws WebApplicationException {@link WebApplicationExceptionMapper}
     * Error de lógica que se genera cuando no se encuentra el patrocinador a borrar.
     */
    @DELETE
    @Path("{patrocinadoresId: \\d+}")
    public void deletePatrocinador(@PathParam("patrocinadoresId") Long patrocinadoresId) throws BusinessLogicException {
        
        LOGGER.log(Level.INFO, "PatrocinadorResource deletePatrocinador: input: {0}", patrocinadoresId);
        if (patrocinadorLogic.getPatrocinador(patrocinadoresId) == null) {
            throw new WebApplicationException("El recurso /patrocinadores/" + patrocinadoresId + " no existe.", 404);
        }
        patrocinadorLogic.deletePatrocinador(patrocinadoresId);
        LOGGER.info("PatrocinadorResource deletePatrocinador: output: void");
    }
    
    /**
     * Convierte una lista de PatrocinadorEntity a una lista de PatrocinadorDTO.
     *
     * @param entityList Lista de PatrocinadorEntity a convertir.
     * @return Lista de PatrocinadorDTO convertida.
     */
    private List<PatrocinadorDTO> listEntity2DTO(List<PatrocinadorEntity> entityList) {
        List<PatrocinadorDTO> list = new ArrayList();
        for (PatrocinadorEntity entity : entityList) {
            list.add(new PatrocinadorDTO(entity));
        }
        return list;
    }
}
