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
public class MemoriaDTO extends MultimediaDTO implements Serializable{
    private String urlImagen;
    private Long id;
    
    public MemoriaDTO(){
        
    }

    /**
     * @return urlImagen
     */
    public String getUrlImagen() {
        return urlImagen;
    }

    /**
     * @param urlImagen nueva URL de la imagen
     */
    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

    /**
     * @return id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id nueva id de la memoria
     */
    public void setId(Long id) {
        this.id = id;
    }
}
