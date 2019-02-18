/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.persistence;

import co.edu.uniandes.csw.eventos.entities.MemoriaEntity;
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
public class MemoriaPersistence {
    
    @PersistenceContext(unitName = "eventosPU")
    protected EntityManager em;
    
    public MemoriaEntity create(MemoriaEntity memoriaEntity){
        em.persist(memoriaEntity);
        return memoriaEntity;
    }
    
    public void delete(Long id) {
        
        MemoriaEntity entity = em.find(MemoriaEntity.class, id);
        em.remove(entity);
    }
    
    public MemoriaEntity find (Long memoriaID){
        return em.find(MemoriaEntity.class, memoriaID);
    }
    
    public List<MemoriaEntity> findAll(){
        TypedQuery<MemoriaEntity> query = em.createQuery("select u from MemoriaEntity u", MemoriaEntity.class);
        return query.getResultList();
    }
}
