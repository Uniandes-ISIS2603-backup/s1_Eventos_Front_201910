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
    
    private undefined QR;
    private String descripcion;
    private Double precio ;
    private String locacion;
    private int numero;
    private boolean disponible;
    private boolean checkIn;
    private boolean reservado;

    public EntradaDTO()
    {
        
    }
    
    public undefined getQR() {
        return QR;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public Double getPrecio() {
        return precio;
    }

    public String getLocacion() {
        return locacion;
    }

    public int getNumero() {
        return numero;
    }

    public boolean isDisponible() {
        return disponible;
    }

    public boolean isCheckIn() {
        return checkIn;
    }

    public boolean isReservado() {
        return reservado;
    }

    public void setQR(undefined QR) {
        this.QR = QR;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public void setLocacion(String locacion) {
        this.locacion = locacion;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public void setDisponible(boolean disponible) {
        this.disponible = disponible;
    }

    public void setCheckIn(boolean checkIn) {
        this.checkIn = checkIn;
    }

    public void setReservado(boolean reservado) {
        this.reservado = reservado;
    }
    
    
}
