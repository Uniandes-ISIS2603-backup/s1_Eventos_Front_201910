/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.dtos;

import java.io.Serializable;

/**
 *
 * @author Paula Molina 
 */
public class PatrocinadorDTO implements Serializable {
    
    private Long id;
    private String nombre;
    private String imagen;
    private String rango;
    private String descripcion;
    
    
    /**
     * Constructor por defecto
     */
    public PatrocinadorDTO(){
        
    }
    
    /**
     * Devuelve el ID del patrocinador.
     *
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * Modifica el ID del patrocinador.
     *
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }
    
    /**
     * Devuelve el nombre del patrocinador.
     *
     * @return el nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * Modifica el nombre del patrocinador.
     *
     * @param nombre 
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    /**
     * Devuelve la imagen del patrocinador.
     *
     * @return el nombre
     */
    public String getImagen() {
        return imagen;
    }

    /**
     * Modifica la imagen del patrocinador.
     *
     * @param imagen 
     */
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
    
    /**
     * Devuelve el rango del patrocinador.
     *
     * @return el nombre
     */
    public String getRango() {
        return rango;
    }

    /**
     * Modifica el rango del patrocinador.
     *
     * @param rango 
     */
    public void setRango(String rango) {
        this.rango = rango;
    }
    
    /**
     * Devuelve la descripcion del patrocinador.
     *
     * @return el descripcion
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * Modificala descripcion del patrocinador.
     *
     * @param descripcion 
     */
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    
}
