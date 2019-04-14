/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.dtos;

import co.edu.uniandes.csw.eventos.entities.CalificacionEntity;

import java.io.Serializable;


/**
 *
 * @author Juan David Díaz
 */
public class CalificacionDetailDTO extends CalificacionDTO implements Serializable {
    
    private EventoDTO evento;
    private UsuarioDTO usuario;

    public CalificacionDetailDTO(CalificacionEntity calificacionEntity)
    {
        super(calificacionEntity);
       // if(calificacionEntity.getUsuario()!=null)
         //   this.evento=new EventoDTO(calificacionEntity.getUsuario());
    }
    
    public UsuarioDTO getUsuario()
    {
        return usuario;
    }
    
    public void setUsuario(UsuarioDTO usuario)
    {
        this.usuario=usuario;
    }
    
    public CalificacionEntity toEntity()
    {
        CalificacionEntity entity = super.toEntity();
        if(getUsuario()!=null)
        {
            //Neceisto que usuario cree el metodo toEntity
             //Neceisto que usuario cree el metodo toEntity
             //Neceisto que usuario cree el metodo toEntity
         //   entity.setUsuario(getUsuario().toEntity());
        }
        return entity;
    }
    
}
