/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.persistence;

import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author estudiante
 */
@Stateless
public class UbicacionPersistence {
    
    private static final Logger LOGGER = Logger.getLogger(UbicacionPersistence.class.getName());
    
    @PersistenceContext (unitName="eventosPU")
    protected EntityManager em;
    
    public UbicacionPersistence create(UbicacionPersistence entity){
      em.persist(entity);
      return entity;
    }
}
