/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;

/**
 *
 * @author estudiante
 */
@Entity
public class EventoEntity extends BaseEntity implements Serializable {
    
     public  enum Categoria{
 
}
    //Atributos
     @javax.persistence.Id
    private Long id;
     
    private String nombre;
    private String descripcion;
    private Date fechaInicio;
    private Date fechaFin;
    private String detalles;
    private Categoria categoria;
    private boolean privado;
    private int capacidadMaxima;
    private int boletasDisponibles;
    
     @javax.persistence.OneToMany(
        mappedBy = "evento",
        fetch = javax.persistence.FetchType.LAZY,
                cascade = CascadeType.ALL
    )
    List<MultimediaEntity> multimedia;
    
    @javax.persistence.ManyToMany(
        mappedBy ="evento",
        fetch = javax.persistence.FetchType.LAZY
           )
    List<PatrocinadorEntity> patrocinadores;
    
    @javax.persistence.ManyToMany(
        mappedBy ="evento",
        fetch = javax.persistence.FetchType.LAZY
           )
    List<OrganizadorEntity> organizadores;
    
    @javax.persistence.OneToOne(
     mappedBy ="evento",
        fetch = javax.persistence.FetchType.LAZY,
        cascade = CascadeType.ALL
           )
    AgendaEntity agenda;
    
     @javax.persistence.ManyToMany(
        mappedBy ="evento",
        fetch = javax.persistence.FetchType.LAZY
           )
    List<UsuarioEntity> usuarios;
    
    
    
    
    

    /**
     * @return the nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
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
     * @return the fechaInicio
     */
    public Date getFechaInicio() {
        return fechaInicio;
    }

    /**
     * @param fechaInicio the fechaInicio to set
     */
    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    /**
     * @return the fechaFin
     */
    public Date getFechaFin() {
        return fechaFin;
    }

    /**
     * @param fechaFin the fechaFin to set
     */
    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }

    /**
     * @return the detalles
     */
    public String getDetalles() {
        return detalles;
    }

    /**
     * @param detalles the detalles to set
     */
    public void setDetalles(String detalles) {
        this.detalles = detalles;
    }

    /**
     * @return the categoria
     */
    public Categoria getCategoria() {
        return categoria;
    }

    /**
     * @param categoria the categoria to set
     */
    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    /**
     * @return the privado
     */
    public boolean isPrivado() {
        return privado;
    }

    /**
     * @param privado the privado to set
     */
    public void setPrivado(boolean privado) {
        this.privado = privado;
    }

    /**
     * @return the capacidadMaxima
     */
    public int getCapacidadMaxima() {
        return capacidadMaxima;
    }

    /**
     * @param capacidadMaxima the capacidadMaxima to set
     */
    public void setCapacidadMaxima(int capacidadMaxima) {
        this.capacidadMaxima = capacidadMaxima;
    }

    /**
     * @return the boletasDisponibles
     */
    public int getBoletasDisponibles() {
        return boletasDisponibles;
    }

    /**
     * @param boletasDisponibles the boletasDisponibles to set
     */
    public void setBoletasDisponibles(int boletasDisponibles) {
        this.boletasDisponibles = boletasDisponibles;
    }
}
