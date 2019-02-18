/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.ejb;


import co.edu.uniandes.csw.eventos.entities.MedioDePagoEntity;
import co.edu.uniandes.csw.eventos.persistence.MedioDePagoPersistence;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.inject.Inject;

/**
 *
 * @author estudiante
 */
@Stateless
public class MedioDePagoLogic {
    
    
    private static final Logger LOGGER = Logger.getLogger(MedioDePagoLogic.class.getName());
    @Inject
    private MedioDePagoPersistence persistencia;
    
    public MedioDePagoEntity createMedioDePago(MedioDePagoEntity medioDePagoEntity)
    {
        LOGGER.log(Level.INFO,"Inicia el proceso de creacion de la editorial");
       
        
        return null;
    }
}
