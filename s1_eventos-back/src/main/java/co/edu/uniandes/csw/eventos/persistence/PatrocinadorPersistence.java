/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.persistence;

import co.edu.uniandes.csw.eventos.entities.PatrocinadorEntity;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

/**
 *
 * @author estudiante
 */
@Stateless
public class PatrocinadorPersistence {
    
    @PersistenceContext(unitName = "eventosPU")
    protected EntityManager em;
    
    /**
     * Crea un patrovinador en la base de datos
     *
     * @param patrocinadorEntity objeto patrocinador que se creará en la base de datos
     * @return devuelve la entidad creada con un id dado por la base de datos.
     */
    public PatrocinadorEntity create(PatrocinadorEntity patrocinadorEntity)
    {
        em.persist(patrocinadorEntity);
        return patrocinadorEntity;
    }
    
    /**
     * Devuelve todos los patrocinadores de la base de datos.
     *
     * @return una lista con todos los patrocinadores que encuentren en la base de datos
     */
    public List<PatrocinadorEntity> findAll() {
        
        TypedQuery query = em.createQuery("select u from PatrocinadorEntity u", PatrocinadorEntity.class);
        return query.getResultList();
    }

    /**
     * Busca si hay algun organizador con el id que se envía de argumento
     *
     * @param patrocinadoresId: id correspondiente al organizador buscado.
     * @return un patrocinador.
     */
    public PatrocinadorEntity find(Long patrocinadoresId) {
        
        return em.find(PatrocinadorEntity.class, patrocinadoresId);
    }

    /**
     * Actualiza un patrocinador.
     *
     * @param patrocinadorEntity: el organizador que viene con los nuevos cambios. 
     * @return un patrocinador con los cambios aplicados.
     */
    public PatrocinadorEntity update(PatrocinadorEntity patrocinadorEntity) {

        return em.merge(patrocinadorEntity);
    }

    /**
     * Borra un patrocinador de la base de datos recibiendo como argumento el id de patrocinador
     *
     * @param patrocinadoresId: id correspondiente al patrocinador a borrar.
     */
    public void delete(Long patrocinadoresId) {

        PatrocinadorEntity patrocinadorEntity = em.find(PatrocinadorEntity.class, patrocinadoresId);
        em.remove(patrocinadorEntity);
    }
}
