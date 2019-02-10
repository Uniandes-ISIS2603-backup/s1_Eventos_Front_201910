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
public class OrganizadorDTO implements Serializable{
    
    private Long id;
    private String nombre;
    private String telefono;
    private String correoElectronico;
    
    
    
    /**
     * Constructor por defecto
     */
    public OrganizadorDTO(){
        
    }
    
    /**
     * Devuelve el ID del organizador.
     *
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * Modifica el ID del organizador.
     *
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }
    
    /**
     * Devuelve el nombre del organizador.
     *
     * @return el nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * Modifica el nombre del organizador.
     *
     * @param nombre 
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    /**
     * Devuelve el telefono del organizador.
     *
     * @return el telefono
     */
    public String getTelefono() {
        return telefono;
    }
    
    /**
     * Modifica el telefono del organizador.
     *
     * @param telefono 
     */
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    
    /**
     * Devuelve el correoElectronico del organizador.
     *
     * @return el correoElectronico
     */
    public String getCorreoElectronico() {
        return correoElectronico;
    }
    
    /**
     * Modifica el correoElectronico del organizador.
     *
     * @param correoElectronico 
     */
    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }
}
