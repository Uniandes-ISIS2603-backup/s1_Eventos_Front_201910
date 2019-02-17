/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.test.persistence;

import co.edu.uniandes.csw.eventos.entities.UbicacionEntity;
import co.edu.uniandes.csw.eventos.persistence.UbicacionPersistence;
import java.util.List;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.Assert;
import org.junit.Test;
import uk.co.jemos.podam.api.PodamFactory;
import uk.co.jemos.podam.api.PodamFactoryImpl;

/**
 *
 * @author estudiante
 */
public class UbicacionPersistenceTest {
    
    @Inject
    private UbicacionPersistence up;
    
    @PersistenceContext
   private EntityManager em;
    
    private List<UbicacionEntity> data;
   
            
            @Deployment
    public static JavaArchive createDeployment() {
        return ShrinkWrap.create(JavaArchive.class)
                .addPackage(UbicacionEntity.class.getPackage())
                .addPackage(UbicacionEntity.class.getPackage())
                .addAsManifestResource("META-INF/persistence.xml", "persistence.xml")
                .addAsManifestResource("META-INF/beans.xml", "beans.xml"); 
}
    
  @Test
public void createEventoEntityTest() {
    PodamFactory factory = new PodamFactoryImpl();
    UbicacionEntity newEntity = factory.manufacturePojo(UbicacionEntity.class);
    
    
    UbicacionEntity ee = up.create(newEntity);
  
    Assert.assertNotNull(ee);
    
   UbicacionEntity entity=em.find(UbicacionEntity.class, ee.getId());
  
   Assert.assertEquals(newEntity.getId(), entity.getId());
}

@Test
public void findAllEventoEntityTest() {
    List<UbicacionEntity> list = up.findAll();
    Assert.assertEquals(data.size(), list.size());
    for (UbicacionEntity ent : list) {
        boolean found = false;
        for (UbicacionEntity entity : data) {
            if (ent.getId().equals(entity.getId())) {
                found = true;
            }
        }
        Assert.assertTrue(found);
    }
    
}
@Test
public void findEventoEntityTest() {
    UbicacionEntity entity = data.get(0);
    UbicacionEntity newEntity = up.find(entity.getId());
    Assert.assertNotNull(newEntity);
    Assert.assertEquals(entity.getId(), newEntity.getId());
}

@Test
public void updateXYZTest() {
    UbicacionEntity entity = data.get(0);
    PodamFactory factory = new PodamFactoryImpl();
    UbicacionEntity newEntity = factory.manufacturePojo(UbicacionEntity.class);

    newEntity.setId(entity.getId());

    up.update(newEntity);

    UbicacionEntity resp = em.find(UbicacionEntity.class, entity.getId());

    Assert.assertEquals(newEntity.getId(), resp.getId());
}
}


