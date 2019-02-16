/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import uk.co.jemos.podam.common.PodamExclude;

/**
 *
 * @author Paula Molina
 */
@Entity
public class OrganizadorEntity extends BaseEntity implements Serializable {
    
    @PodamExclude
    @ManyToMany(mappedBy = "organizadores")
    private List<EventoEntity> eventos = new ArrayList<>();
    
    private String nombre;
    private String telefono;
    private String correoElectronico;
    
}
