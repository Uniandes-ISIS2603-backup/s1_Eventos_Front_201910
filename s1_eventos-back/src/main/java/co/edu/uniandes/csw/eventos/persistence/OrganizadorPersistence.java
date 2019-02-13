/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.persistence;

import co.edu.uniandes.csw.eventos.entities.OrganizadorEntity;
import javax.ejb.Stateless;
import javax.persistence.*;


/**
 *
 * @author Paula Molina 
 */
@Stateless
public class OrganizadorPersistence {
     
    @PersistenceContext(unitName = "eventosPU")
    EntityManager em;
    
    
    public OrganizadorEntity create(OrganizadorEntity organizadorEntity)
    {
        em.persist(organizadorEntity);
        return organizadorEntity;
    }
}
