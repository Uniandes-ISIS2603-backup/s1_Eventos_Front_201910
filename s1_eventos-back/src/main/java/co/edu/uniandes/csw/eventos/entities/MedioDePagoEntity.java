/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.eventos.entities;
import java.util.Date;
import javax.persistence.Entity;
import java.io.Serializable;

/**
 *
 * @author estudiante
 */
@Entity
public class MedioDePagoEntity extends BaseEntity implements Serializable {
    
    /**
     * id del medio de pago
     */
    private int iden;
    
    /**
     * 
     */
    private String titular;
    private int codigoDeSeguridad;
    private Date fechaDeExpiracion;
    
    /**
     * Constructor
     */
    public MedioDePagoEntity()
    {
        
    }

    /**
     * Retorna el id
     * @return id
     */
    public int getIden() {
        return iden;
    }

    /**
     * Modifica el id
     * @param id 
     */
    public void setId(int id) {
        this.iden = id;
    }

    /**
     * Retorna el titular del medio de pago
     * @return titular
     */
    public String getTitular() {
        return titular;
    }

    /**
     * Modifica el titular del medio de pago
     * @param titular 
     */
    public void setTitular(String titular) {
        this.titular = titular;
    }

    /**
     * Retorna el codigo 
     * @return codigoDeCelular
     */
    public int getCodigoDeCelular() {
        return codigoDeSeguridad;
    }

    /**
     * Modifica el codigo de celular
     * @param codigoDeSeguridad 
     */
    public void setCodigoDeCelular(int codigoDeSeguridad) {
        this.codigoDeSeguridad = codigoDeSeguridad;
    }

    /**
     * Retorna la fecha de expiracion
     * @return fechaDeExpiracion
     */
    public Date getFechaDeExpiracion() {
        return fechaDeExpiracion;
    }

    /**
     * Modifica la fecha de expiracion
     * @param fechaDeExpiracion 
     */
    public void setFechaDeExpiracion(Date fechaDeExpiracion) {
        this.fechaDeExpiracion = fechaDeExpiracion;
    }
    
    
}
