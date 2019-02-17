/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.entities;

import java.io.Serializable;
import javax.persistence.Entity;

/**
 *
 * @author estudiante
 */
@Entity
public class UbicacionEntity extends BaseEntity implements Serializable {
    
    /**
     * Representa el id de una ubicacion , es la llave principal de la base de datos
     */
    @javax.persistence.Id
    private Long id;
    
     /**
     * Representa la latitud de una ubicacion
     */
     private double latitud;
     /**
     * Representa la longitud de una ubicacion
     */
    private double longitud;
    /**
     * Representa el edificio de una ubicacion
     */
    private String edificio;
    /**
     * Representa el salon de una ubicacion
     */
    private String salon;
     
    

    /**
     * @return the latitud
     */
    public double getLatitud() {
        return latitud;
    }

    /**
     * @param latitud the latitud to set
     */
    public void setLatitud(double latitud) {
        this.latitud = latitud;
    }

    /**
     * @return the longitud
     */
    public double getLongitud() {
        return longitud;
    }

    /**
     * @param longitud the longitud to set
     */
    public void setLongitud(double longitud) {
        this.longitud = longitud;
    }

    /**
     * @return the edificio
     */
    public String getEdificio() {
        return edificio;
    }

    /**
     * @param edificio the edificio to set
     */
    public void setEdificio(String edificio) {
        this.edificio = edificio;
    }

    /**
     * @return the salon
     */
    public String getSalon() {
        return salon;
    }

    /**
     * @param salon the salon to set
     */
    public void setSalon(String salon) {
        this.salon = salon;
    }

    
    
    
}
