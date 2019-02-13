/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.entities;

import java.io.Serializable;
import javax.persistence.Entity;

/**
 *
 * @author Paula Molina
 */
@Entity
public class PatrocinadorEntity extends BaseEntity implements Serializable{
    
    private boolean nueva;
    private String nombre;
    
    public boolean isNueva(){
        return nueva;
    }
    
    public void setNuevo(boolean nueva)
    {
        this.nueva = nueva;
    }
    
    public String getNombre()
    {
        return nombre;
    }
    
    public void setNombre(String nombre)
    {
        this.nombre = nombre;
    }
}
