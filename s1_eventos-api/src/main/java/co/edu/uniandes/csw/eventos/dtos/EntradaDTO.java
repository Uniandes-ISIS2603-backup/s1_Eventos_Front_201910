/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.dtos;

import java.io.Serializable;

/**
 *
 * @author Juan David Díaz Cristancho
 */
public class EntradaDTO implements Serializable {
    
    /*
        Atributo de un tipo por definir que almacena el codigo QR
    */
    private String QR;
    /*
        Atributo de tipo string que contiene la descripcion de la entrada
    */
    private String descripcion;
    /*
        Atributo de tipo double que representa el precio de la entrada
    */
    private Double precio ;
    /*
    Atributo de tipo String que representa la locacion de la entrada
    */
    private String locacion;
    /*
        Atributo de tipo int que indica el numero de la boleta
    */
    private int numero;
    /*
        Atributo de tipo booleano que indica si la boleta esta disponible
    */
    private boolean disponible;
    /*
        Atributo de tipo booleano que indica si ya se hizo check-In con la boleta
    */
    private boolean checkIn;
    /*
        Atributo de tipo booleano que indica si la boleta esta reservada
    */
    private boolean reservado;

    /*
        Constructor 
    */
    public EntradaDTO()
    {
        
    }
    /**
        @return QR. Retorna el QR
    **/
    public String getQR() {
        return QR;
    }
    /**
        @return descripcion. Retorna la descripcion
    **/
    public String getDescripcion() {
        return descripcion;
    }
    /**
     *  @return precio. Retorna el precio
    **/
    public Double getPrecio() {
        return precio;
    }
    /**
        @return locacion.   Retorna la locacion
    **/
    public String getLocacion() {
        return locacion;
    }
    /**
     * @return numero. Retorna el numero de la entrada
    **/
    public int getNumero() {
        return numero;
    }
    /**
     *  @return disponible. Retorna si esta disponible, true, de lo contrario false
    **/
    public boolean isDisponible() {
        return disponible;
    }
    /**
       * @reteurn checkIn. Retorna si ya se realizo checkIn, true, de lo contrario false
    **/
    public boolean isCheckIn() {
        return checkIn;
    }
    /**
     *  @return reservado. Retorna si esta reservada, true, de lo contrario false
    **/
    public boolean isReservado() {
        return reservado;
    }
    /**
     * @param QR.  Reinicializa el valor del QR
    **/
    public void setQR(String QR) {
        this.QR = QR;
    }
    /**
     * @param descripcion. Reinicializa el valor de la descripcion
    **/
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    /**
     *@param precio. Reinicializa el valor del precio
    **/
    public void setPrecio(Double precio) {
        this.precio = precio;
    }
    /**
     * @param disponible. Reinicializa el valor de disponible
    **/
    public void setDisponible(boolean disponible) {
        this.disponible = disponible;
    }
    /**
      * @param checkIn  Reinicializa el valor de checkIn
    **/
    public void setCheckIn(boolean checkIn) {
        this.checkIn = checkIn;
    }
    /**
      *@param reservado  Reinicializa el valor de reservado
    **/
    public void setReservado(boolean reservado) {
        this.reservado = reservado;
    }
    
    
}
