/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.entities;

import java.io.Serializable;
import javax.persistence.Entity;
import java.util.Date;

/**
 *
 * @author Juan David Diaz
 */

@Entity
public class EntradaEntity extends BaseEntity implements Serializable{
    private String QR;
    private String descripcion;
    private int precio;
    private String locacion;
    private int numero;
    private boolean disponible;
    private boolean checkIn;
    private boolean reservada;
    
    /**
     * Constructor 
     */
    public EntradaEntity()
    {
        
    }

    /**
     * Retorna el codigo QR
     * @return QR
     */
    public String getQR() {
        return QR;
    }
    
    /**
     * Modificar el codigo QR
     * @param QR 
     */
    public void setQR(String QR) {
        this.QR = QR;
    }

    /**
     * Retorna la descripcion
     * @return descripcion
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * Modifica la descripcion
     * @param descripcion 
     */
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    /**
     * Retorna el precio 
     * @return precio
     */
    public int getPrecio() {
        return precio;
    }

    /**
     * Modifica el precio
     * @param precio 
     */
    public void setPrecio(int precio) {
        this.precio = precio;
    }

    /**
     * Retorna la locacion
     * @return locacion
     */
    public String getLocacion() {
        return locacion;
    }

    /**
     * Modifica la locacion
     * @param locacion 
     */
    public void setLocacion(String locacion) {
        this.locacion = locacion;
    }

    /**
     * Retorna el numero 
     * @return 
     */
    public int getNumero() {
        return numero;
    }

    /**
     * Modifica el numero
     * @param numero 
     */
    public void setNumero(int numero) {
        this.numero = numero;
    }

    /**
     * Retorna si esta disponible
     * @return disponible
     */
    public boolean isDisponible() {
        return disponible;
    }

    /**
     * Modifica i esta disponible
     * @param disponible 
     */
    public void setDisponible(boolean disponible) {
        this.disponible = disponible;
    }

    /**
     * Retorna si el check in ya se realizo
     * @return checkIn
     */
    public boolean isCheckIn() {
        return checkIn;
    }

    /**
     * Modifica el estado del checkIn
     * @param checkIn 
     */
    public void setCheckInm(boolean checkIn) {
        this.checkIn = checkIn;
    }

    /**
     * Retorna si esta reservada
     * @return reservada
     */
    public boolean isReservada() {
        return reservada;
    }

    /**
     * Modifica el estado de reserva
     * @param reservada 
     */
    public void setReservada(boolean reservada) {
        this.reservada = reservada;
    }
    
    
}
