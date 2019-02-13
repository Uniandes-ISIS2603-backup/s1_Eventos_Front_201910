/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.test.persistence;

import co.edu.uniandes.csw.eventos.persistence.OrganizadorPersistence;
import javax.inject.Inject;
import org.jboss.arquillian.junit.Arquillian;
import org.junit.runner.RunWith;

/**
 *
 * @author estudiante
 */
@RunWith(Arquillian.class)
public class OrganizadorPersistenceTest {
    
    @Inject
    private OrganizadorPersistence organizadorPersistence;
}
