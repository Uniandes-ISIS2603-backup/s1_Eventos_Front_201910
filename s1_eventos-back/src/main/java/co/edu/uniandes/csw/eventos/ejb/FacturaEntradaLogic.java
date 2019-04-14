/*
MIT License

Copyright (c) 2017 Universidad de los Andes - ISIS2603

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
package co.edu.uniandes.csw.eventos.ejb;

import co.edu.uniandes.csw.eventos.entities.EntradaEntity;
import co.edu.uniandes.csw.eventos.entities.FacturaEntity;
import co.edu.uniandes.csw.eventos.exceptions.BusinessLogicException;
import co.edu.uniandes.csw.eventos.persistence.EntradaPersistence;
import co.edu.uniandes.csw.eventos.persistence.FacturaPersistence;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import javax.inject.Inject;

/**
 * Clase que implementa la conexion con la persistencia para la relación entre
 * la entidad de Factura y Entrada.
 *
 * @author ISIS2603
 */
@Stateless
public class FacturaEntradaLogic {

    private static final Logger LOGGER = Logger.getLogger(FacturaEntradaLogic.class.getName());

    @Inject
    private EntradaPersistence EntradaPersistence;

    @Inject
    private FacturaPersistence FacturaPersistence;

    /**
     * Agregar un Entrada a la Factura
     *
     * @param entradasId El id libro a guardar
     * @param facturasId El id de la Factura en la cual se va a guardar el
     * libro.
     * @return la entrada creado.
     */
    public EntradaEntity addEntrada(Long entradasId, Long facturasId) {
        LOGGER.log(Level.INFO, "Inicia proceso de agregarle un libro a la Factura con id = {0}", facturasId);
        FacturaEntity facturaEntity = FacturaPersistence.find(facturasId);
        EntradaEntity entradaEntity = EntradaPersistence.find(entradasId);
//        EntradaEntity.setFactura(facturaEntity);
        LOGGER.log(Level.INFO, "Termina proceso de agregarle un libro a la Factura con id = {0}", facturasId);
        return entradaEntity;
    }

    /**
     * Retorna todos los Entradas asociados a una Factura
     *
     * @param FacturasId El ID de la Factura buscada
     * @return La lista de libros de la Factura
     */
    public List<EntradaEntity> getEntradas(Long FacturasId) {
        LOGGER.log(Level.INFO, "Inicia proceso de consultar los libros asociados a la Factura con id = {0}", FacturasId);
        return FacturaPersistence.find(FacturasId).getEntradas();
    }

    /**
     * Retorna un Entrada asociado a una Factura
     *
     * @param FacturasId El id de la Factura a buscar.
     * @param EntradasId El id dla entrada a buscar
     * @return la entrada encontrado dentro de la Factura.
     * @throws BusinessLogicException Si la entrada no se encuentra en la
     * Factura
     */
    public EntradaEntity getEntrada(Long FacturasId, Long EntradasId) throws BusinessLogicException {
        LOGGER.log(Level.INFO, "Inicia proceso de consultar la entrada con id = {0} de la Factura con id = " + FacturasId, EntradasId);
        List<EntradaEntity> Entradas = FacturaPersistence.find(FacturasId).getEntradas();
        EntradaEntity EntradaEntity = EntradaPersistence.find(EntradasId);
        int index = Entradas.indexOf(EntradaEntity);
        LOGGER.log(Level.INFO, "Termina proceso de consultar la entrada con id = {0} de la Factura con id = " + FacturasId, EntradasId);
        if (index >= 0) {
            return Entradas.get(index);
        }
        throw new BusinessLogicException("la entrada no está asociado a la Factura");
    }

}
