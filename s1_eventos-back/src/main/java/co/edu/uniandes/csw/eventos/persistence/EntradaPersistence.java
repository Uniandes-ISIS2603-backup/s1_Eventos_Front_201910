/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.persistence;
import co.edu.uniandes.csw.eventos.entities.MedioDePagoEntity;
import java.util.List;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import co.edu.uniandes.csw.eventos.entities.EntradaEntity;

/**
 *
 * @author estudiante
 */

@Stateless
public class EntradaPersistence {
    
    private static final Logger LOGGER = Logger.getLogger(EntradaPersistence.class.getName());
    
    @PersistenceContext(unitName="eventosPU")
    protected EntityManager em;
    
    public EntradaPersistence create(EntradaPersistence entity)
    {
        em.persist(entity);
        return entity;
    }
    
     public void delete(Long id)
    {
        EntradaPersistence eliminar = find(id);
        em.remove(eliminar);
    }
     
     public EntradaPersistence find(long id)
    {
        return em.find(EntradaPersistence.class, id);
    }
     
     public List<EntradaEntity> findAll()
    {
        TypedQuery query = em.createQuery("select u from EventoEntity u",EntradaEntity.class);
        return query.getResultList();
    }
    
     public void update(EntradaEntity entity)
    {
        em.refresh(entity);
    }
     
}
