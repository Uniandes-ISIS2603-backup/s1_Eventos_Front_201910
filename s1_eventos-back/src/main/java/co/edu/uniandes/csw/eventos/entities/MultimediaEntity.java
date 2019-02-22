/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.entities;

import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import uk.co.jemos.podam.common.PodamExclude;

/**
 *
 * @author Nicolas Diaz
 */
@Entity
public class MultimediaEntity extends BaseEntity implements Serializable{
        
    private static long serialVersionUID = 1L;
    private String url;
    private String nombre;
    private String tipo;
    
    
     @PodamExclude
    @ManyToOne
    private EventoEntity evento;//=new EventoEntity();
     

   
    /**
     * Constructor por defecto
     */
    public MultimediaEntity(){
    }
    /**
     * @return  url
     */
    public String getUrl() {
        return url;
    }

    /**
     * @param url la nueva url
     */
    public void setUrl(String url) {
        this.url = url;
    }

    /**
     * @return nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre el nuevo nombre
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * @return tipo
     */
    public String getTipo() {
        return tipo;
    }

    /**
     * @param tipo el nuevo tipo
     */
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    /**
     * @return the evento
     */
    public EventoEntity getEvento() {
        return evento;
    }

    /**
     * @param evento the evento to set
     */
    public void setEvento(EventoEntity evento) {
        this.evento = evento;
    }
}
