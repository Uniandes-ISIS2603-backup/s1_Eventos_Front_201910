/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.test.persistence;

import co.edu.uniandes.csw.eventos.entities.MemoriaEntity;
import co.edu.uniandes.csw.eventos.persistence.MemoriaPersistence;
import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.UserTransaction;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import uk.co.jemos.podam.api.PodamFactory;
import uk.co.jemos.podam.api.PodamFactoryImpl;

/**
 *
 * @author Nicolas Diaz
 */
@RunWith(Arquillian.class)
public class MemoriaPersistenceTest {
    @Inject
    private MemoriaPersistence memoriaPersistence;

    @PersistenceContext
    private EntityManager em;

    @Inject
    UserTransaction utx;

    private List<MemoriaEntity> data = new ArrayList<MemoriaEntity>();
    
    @Deployment
    public static JavaArchive createDeployment(){
        return ShrinkWrap.create(JavaArchive.class)
                .addPackage(MemoriaEntity.class.getPackage())
                .addPackage(MemoriaPersistence.class.getPackage())
                .addAsManifestResource("META-INF/persistence.xml", "persistence.xml")
                .addAsManifestResource("META-INF/beans.xml", "beans.xml");
    }
    
    /**
     * Configuración inicial de la prueba.
     */
    @Before
    public void configTest() {
        try {
            utx.begin();
            em.joinTransaction();
            clearData();
            insertData();
            utx.commit();
        } catch (Exception e) {
            e.printStackTrace();
            try {
                utx.rollback();
            } catch (Exception e1) {
                e1.printStackTrace();
            }
        }
    }

    /**
     * Limpia las tablas que están implicadas en la prueba.
     *
     *
     */
    private void clearData() {
        em.createQuery("delete from MemoriaEntity").executeUpdate();
    }

    /**
     * Inserta los datos iniciales para el correcto funcionamiento de las
     * pruebas.
     *
     *
     */
    private void insertData() {
        PodamFactory factory = new PodamFactoryImpl();
        for (int i = 0; i < 3; i++) {

            MemoriaEntity entity = factory.manufacturePojo(MemoriaEntity.class);

            em.persist(entity);

            data.add(entity);
        }
    }
    
    @Test
    public void createMemoriaTest(){
        
        PodamFactory factory = new PodamFactoryImpl();
        MemoriaEntity newEntity = factory.manufacturePojo(MemoriaEntity.class);
        MemoriaEntity result = memoriaPersistence.create(newEntity);

        Assert.assertNotNull(result);

        MemoriaEntity entity = em.find(MemoriaEntity.class, result.getId());

        Assert.assertEquals(newEntity.getUrlImagen(), entity.getUrlImagen());
    }
    
    @Test
    public void deleteMemoriaTest() {
        MemoriaEntity entity = data.get(0);
        memoriaPersistence.delete(entity.getId());
        MemoriaEntity deleted = em.find(MemoriaEntity.class, entity.getId());
        Assert.assertNull(deleted);
    }
}
