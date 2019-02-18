/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.persistence;

import co.edu.uniandes.csw.eventos.entities.MultimediaEntity;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

/**
 *
 * @author Nicolas Diaz
 */
@Stateless
public class MultimediaPersistence {
    
    @PersistenceContext(unitName = "eventosPU")
    protected EntityManager em;
    
    
    public MultimediaEntity create(MultimediaEntity multimediaEntity){
        em.persist(multimediaEntity);
        return multimediaEntity;
    }
    
    public void delete(Long id) {
        
        MultimediaEntity entity = em.find(MultimediaEntity.class, id);
        em.remove(entity);
    }
    
    public MultimediaEntity find (Long multimediaID){
        return em.find(MultimediaEntity.class, multimediaID);
    }
    
    public List<MultimediaEntity> findAll(){
        TypedQuery<MultimediaEntity> query = em.createQuery("select u from MultimediaEntity u", MultimediaEntity.class);
        return query.getResultList();
    }
}
