/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.persistence;

import co.edu.uniandes.csw.eventos.entities.UsuarioEntity;
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
public class UsuarioPersistence {
    @PersistenceContext(unitName = "eventosPU")
    protected EntityManager em;
    
    public UsuarioEntity create(UsuarioEntity usuarioEntity){
        em.persist(usuarioEntity);
        return usuarioEntity;
    }
    
    public void delete(Long id) {
        
        UsuarioEntity entity = em.find(UsuarioEntity.class, id);
        em.remove(entity);
    }
    
    public UsuarioEntity find (Long usuarioID){
        return em.find(UsuarioEntity.class, usuarioID);
    }
    
    public List<UsuarioEntity> findAll(){
        TypedQuery<UsuarioEntity> query = em.createQuery("select u from UsuarioEntity u", UsuarioEntity.class);
        return query.getResultList();
    }
}
