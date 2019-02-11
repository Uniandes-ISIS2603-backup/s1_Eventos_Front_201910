/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.dtos;

import java.io.Serializable;

/**
 *
 * @author Nicolas Diaz
 */
public class MultimediaDTO implements Serializable {
    private String url;
    private String nombre;
    private String tipo;
    
    public MultimediaDTO(){
        
    }

    /**
     * @return url
     */
    public String getUrl() {
        return url;
    }

    /**
     * @param url la nueva URL
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
}
