/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.dtos;

import co.edu.uniandes.csw.eventos.entities.OrganizadorEntity;
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
     * Crea un objeto OrganizadorDTO a partir de un objeto OrganizadorEntity.
     *
     * @param organizadorEntity Entidad OrganizadorEntity desde la cual se va a crear el nuevo objeto.
     *
     */
    public OrganizadorDTO(OrganizadorEntity organizadorEntity) {
        if (organizadorEntity != null) {
            this.id = organizadorEntity.getId();
            this.nombre = organizadorEntity.getNombre();
            this.telefono = organizadorEntity.getTelefono();
            this.correoElectronico = organizadorEntity.getCorreoElectronico();
        }
    }

    /**
     * Convierte un objeto OrganizadorDTO a OrganizadorEntity.
     *
     * @return Nueva objeto OrganizadorEntity.
     *
     */
    public OrganizadorEntity toEntity() {
        OrganizadorEntity organizadorEntity = new OrganizadorEntity();
        organizadorEntity.setId(this.getId());
        organizadorEntity.setNombre(this.getNombre());
        organizadorEntity.setTelefono(this.getTelefono());
        organizadorEntity.setCorreoElectronico(this.getCorreoElectronico());
        return organizadorEntity;
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
