/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
import uk.co.jemos.podam.common.PodamExclude;

/**
 *
 * @author Paula Molina
 */
@Entity
public class PatrocinadorEntity extends BaseEntity implements Serializable{

    @PodamExclude
    @ManyToMany(mappedBy = "patrocinadores")
    private List<EventoEntity> eventos = new ArrayList<>();
    
     @PodamExclude
    @OneToMany(mappedBy = "author",fetch=FetchType.LAZY)
    private List<MemoriaEntity> memorias = new ArrayList<>();
     
    private String nombre;
    private String imagen;
    private String rango;
    private String descripcion;
     
    /**
     * @return the nombre
     */
    public String getNombre()
    {
        return nombre;
    }
    
    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre)
    {
        this.nombre = nombre;
    }
    
    /**
     * @return the imagen
     */
    public String getImagen() {
        return imagen;
    }

    /**
     * @param imagen the imagen to set
     */
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    /**
     * @return the rango
     */
    public String getRango() {
        return rango;
    }

    /**
     * @param rango the rango to set
     */
    public void setRango(String rango) {
        this.rango = rango;
    }

    /**
     * @return the descripcion
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * @param descripcion the descripcion to set
     */
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    
    /**
     * @return the eventos
     */
    public List<EventoEntity> getEventos() {
        return eventos;
    }

    /**
     * @param eventos the eventos to set
     */
    public void setEventos(List<EventoEntity> eventos) {
        this.eventos = eventos;
    }
    
        /**
     * @return the memorias
     */
    public List<MemoriaEntity> getMemorias() {
        return memorias;
    }

    /**
     * @param memorias the memorias to set
     */
    public void setMemorias(List<MemoriaEntity> memorias) {
        this.memorias = memorias;
    }
}