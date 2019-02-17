/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.test.persistence;

import co.edu.uniandes.csw.eventos.entities.EventoEntity;
import co.edu.uniandes.csw.eventos.persistence.EventoPersistence;
import java.util.List;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import uk.co.jemos.podam.api.PodamFactory;
import uk.co.jemos.podam.api.PodamFactoryImpl;

/**
 *
 * @author estudiante
 */
@RunWith(Arquillian.class)
public class EventoPersistenceTest {
    
    @Inject
    private EventoPersistence ep;
    
    @PersistenceContext
   private EntityManager em;
    
    private List<EventoEntity> data;
    
     @Inject
       UserTransaction utx;
   
            
            @Deployment
    public static JavaArchive createDeployment() {
        return ShrinkWrap.create(JavaArchive.class)
                .addPackage(EventoEntity.class.getPackage())
                .addPackage(EventoPersistence.class.getPackage())
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
     * Inserta los datos iniciales para el correcto funcionamiento de las
     * pruebas.
     */
    private void insertData() {
        PodamFactory factory = new PodamFactoryImpl();
        for (int i = 0; i < 3; i++) {
            EventoEntity entity = factory.manufacturePojo(EventoEntity.class);

            em.persist(entity);
            data.add(entity);
        }
    }
    
    /**
     * Limpia las tablas que están implicadas en la prueba.
     */
    private void clearData() {
        em.createQuery("delete from OrganizadorEntity").executeUpdate();
    }
    
    
    
    //
    
  @Test
public void createEventoEntityTest() {
    PodamFactory factory = new PodamFactoryImpl();
    EventoEntity newEntity = factory.manufacturePojo(EventoEntity.class);
    
    
    EventoEntity ee = ep.create(newEntity);
  
    Assert.assertNotNull(ee);
    
   EventoEntity entity=em.find(EventoEntity.class, ee.getId());
  
   Assert.assertEquals(newEntity.getNombre(), entity.getNombre());
}

@Test
public void findAllEventoEntityTest() {
    List<EventoEntity> list = ep.findAll();
    Assert.assertEquals(data.size(), list.size());
    for (EventoEntity ent : list) {
        boolean found = false;
        for (EventoEntity entity : data) {
            if (ent.getId().equals(entity.getId())) {
                found = true;
            }
        }
        Assert.assertTrue(found);
    }
    
}
@Test
public void findEventoEntityTest() {
    EventoEntity entity = data.get(0);
    EventoEntity newEntity = ep.find(entity.getId());
    Assert.assertNotNull(newEntity);
    Assert.assertEquals(entity.getNombre(), newEntity.getNombre());
}

@Test
public void updateXYZTest() {
    EventoEntity entity = data.get(0);
    PodamFactory factory = new PodamFactoryImpl();
    EventoEntity newEntity = factory.manufacturePojo(EventoEntity.class);

    newEntity.setId(entity.getId());

    ep.update(newEntity);
    

    EventoEntity resp = em.find(EventoEntity.class, entity.getId());

    Assert.assertEquals(newEntity.getNombre(), resp.getNombre());
}
}
