/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.test.persistence;

import co.edu.uniandes.csw.eventos.entities.AgendaEntity;
import co.edu.uniandes.csw.eventos.persistence.AgendaPersistence;
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
 * @agenda estudiante
 */
@RunWith(Arquillian.class)
public class AgendaPersistenceTest {
    
//    @Inject
//    private agendaPersistence agendaPersistence;
//
//    @PersistenceContext
//    private EntityManager em;
//
//    @Inject
//    UserTransaction utx;
//
//    private List<AgendaEntity> data = new ArrayList<>();
//
//    /**
//     * @return Devuelve el jar que Arquillian va a desplegar en Payara embebido.
//     * El jar contiene las clases, el descriptor de la base de datos y el
//     * archivo beans.xml para resolver la inyección de dependencias.
//     */
//    @Deployment
//    public static JavaArchive createDeployment() {
//        return ShrinkWrap.create(JavaArchive.class)
//                .addPackage(agendaEntity.class.getPackage())
//                .addPackage(agendaPersistence.class.getPackage())
//                .addAsManifestResource("META-INF/persistence.xml", "persistence.xml")
//                .addAsManifestResource("META-INF/beans.xml", "beans.xml");
//    }
//
//    /**
//     * Configuración inicial de la prueba.
//     */
//    @Before
//    public void configTest() {
//        try {
//            utx.begin();
//            em.joinTransaction();
//            clearData();
//            insertData();
//            utx.commit();
//        } catch (Exception e) {
//            e.printStackTrace();
//            try {
//                utx.rollback();
//            } catch (Exception e1) {
//                e1.printStackTrace();
//            }
//        }
//    }
//
//    /**
//     * Limpia las tablas que están implicadas en la prueba.
//     */
//    private void clearData() {
//        em.createQuery("delete from agendaEntity").executeUpdate();
//    }
//
//    /**
//     * Inserta los datos iniciales para el correcto funcionamiento de las
//     * pruebas.
//     */
//    private void insertData() {
//        PodamFactory factory = new PodamFactoryImpl();
//        for (int i = 0; i < 3; i++) {
//            agendaEntity entity = factory.manufacturePojo(agendaEntity.class);
//
//            em.persist(entity);
//            data.add(entity);
//        }
//    }
//
//    /**
//     * Prueba para crear un agenda.
//     */
//    @Test
//    public void createagendaTest() {
//        PodamFactory factory = new PodamFactoryImpl();
//        agendaEntity newEntity = factory.manufacturePojo(agendaEntity.class);
//        agendaEntity result = agendaPersistence.create(newEntity);
//
//        Assert.assertNotNull(result);
//
//        agendaEntity entity = em.find(agendaEntity.class, result.getId());
//
//        Assert.assertEquals(newEntity.getNombre(), entity.getNombre());
//    }
//
//    /**
//     * Prueba para consultar la lista de agendas.
//     */
//    @Test
//    public void getagendasTest() {
//        List<agendaEntity> list = agendaPersistence.findAll();
//        Assert.assertEquals(data.size(), list.size());
//        for (agendaEntity ent : list) {
//            boolean found = false;
//            for (agendaEntity entity : data) {
//                if (ent.getId().equals(entity.getId())) {
//                    found = true;
//                }
//            }
//            Assert.assertTrue(found);
//        }
//    }
//
//    /**
//     * Prueba para consultar un agenda.
//     */
//    @Test
//    public void getagendaTest() {
//        agendaEntity entity = data.get(0);
//        agendaEntity newEntity = agendaPersistence.find(entity.getId());
//        Assert.assertNotNull(newEntity);
//        Assert.assertEquals(entity.getNombre(), newEntity.getNombre());
//    }
//
//    /**
//     * Prueba para actualizar un agenda.
//     */
//    @Test
//    public void updateagendaTest() {
//        agendaEntity entity = data.get(0);
//        PodamFactory factory = new PodamFactoryImpl();
//        agendaEntity newEntity = factory.manufacturePojo(agendaEntity.class);
//
//        newEntity.setId(entity.getId());
//
//        agendaPersistence.update(newEntity);
//
//        agendaEntity resp = em.find(agendaEntity.class, entity.getId());
//
//        Assert.assertEquals(newEntity.getNombre(), resp.getNombre());
//    }
//
//    /**
//     * Prueba para eliminar un agenda.
//     */
//    @Test
//    public void deleteagendaTest() {
//        agendaEntity entity = data.get(0);
//        agendaPersistence.delete(entity.getId());
//        agendaEntity deleted = em.find(agendaEntity.class, entity.getId());
//        Assert.assertNull(deleted);
//    }
    
}
