/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.dtos;

import java.io.Serializable;

/**
 *
 * @author Juan David Díaz 
 */
public class CalificacionDTO implements Serializable {
    /*
        Atributo de tipo int que indica la cantidad de estrellas de la calificacion
    */
   
    private int estrellas;
    /*
        Atributo de  tipo String que contiene el comentario de la calificacion
    */
    private String comentario;
    /*
        Atributo de tipo booleano que indica si se recomienda o no
    */
    private boolean recomendado;

    /*
        Constructor
    */
      public CalificacionDTO()
    {
        
    }
      /**
       * @return estrellas.  Retorna las estrellas
      **/
    public int getEstrellas() {
        return estrellas;
    }
     /**
       * @return comentario. Retorna el comentario
      **/
    public String getComentario() {
        return comentario;
    }
    /**
       * @return recomendado. Retorna si es recomendado
      **/
    public boolean isRecomendado() {
        return recomendado;
    }
    /**
       @param estrellas. Reinicializa las estrellas
      **/
    public void setEstrellas(int estrellas) {
        this.estrellas = estrellas;
    }
    /**
       * @param comentario. Reinicializa el comentario
      **/
    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
    /**
       * @param recomendado. Reinicializa si es recomendado
      **/
    public void setRecomendado(boolean recomendado) {
        this.recomendado = recomendado;
    }
    
    
}
