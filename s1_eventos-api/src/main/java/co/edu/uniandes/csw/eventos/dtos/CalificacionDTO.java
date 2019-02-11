/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.dtos;

/**
 *
 * @author estudiante
 */
public class CalificacionDTO {
    private int estrellas;
    private String comentario;
    private boolean recomendado;

      public EntradaDTO()
    {
        
    }
      
    public int getEstrellas() {
        return estrellas;
    }

    public String getComentario() {
        return comentario;
    }

    public boolean isRecomendado() {
        return recomendado;
    }

    public void setEstrellas(int estrellas) {
        this.estrellas = estrellas;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public void setRecomendado(boolean recomendado) {
        this.recomendado = recomendado;
    }
    
    
}
