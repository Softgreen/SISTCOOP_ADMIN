'use strict';

angular.module('mean').factory('CajaService', ['Restangular',
  function (Restangular) {

    var _cajaService = Restangular.all('cajas');
    var baseUrl = 'cajas';

    return {
      findById: function (idCaja) {
        return Restangular.one(baseUrl + '/' + idCaja).get();
      },
      getCajas: function (idAgencia) {
        return Restangular.all(baseUrl).getList({idAgencia: idAgencia});
      },
      getDetalle: function (idCaja) {
        return Restangular.all(baseUrl + '/' + idCaja + '/detalle').getList();
      },
      getBovedas: function (idCaja) {
        return Restangular.all(baseUrl + '/' + idCaja + '/bovedas').getList();
      },
      getMonedas: function (idCaja) {
        return Restangular.all(baseUrl + '/' + idCaja + '/monedas').getList();
      },
      getPendientes: function (idCaja, idHistorial) {
        if (arguments.length === 1)
          return Restangular.all(baseUrl + '/' + idCaja + '/pendientes').getList();
        else if (arguments.length === 2)
          return Restangular.all(baseUrl + '/' + idCaja + '/pendientes').getList({idHistorial: idHistorial});
      },
      getPendientesPorPagar: function (idCaja) {
        return Restangular.all(baseUrl + '/' + idCaja + '/pendientesPorPagar').getList();
      },
      getVoucherCuentaAporte: function (idTransaccion) {
        return Restangular.one(baseUrl + '/voucherCuentaAporte/' + idTransaccion).get();
      },
      getVoucherTransaccionBancaria: function (idTransaccion) {
        return Restangular.one(baseUrl + '/voucherTransaccionBancaria/' + idTransaccion).get();
      },
      getVoucherTransferenciaBancaria: function (idTransferencia) {
        return Restangular.one(baseUrl + '/voucherTransferenciaBancaria/' + idTransferencia).get();
      },
      getVoucherCompraVenta: function (idCompraVenta) {
        return Restangular.one(baseUrl + '/voucherCompraVenta/' + idCompraVenta).get();
      },
      getVoucherTransaccionCheque: function (idTransaccionCheque) {
        return Restangular.one(baseUrl + '/voucherCheque/' + idTransaccionCheque).get();
      },
      getHistorialTransaccion: function (idCaja, idHistorial, filterText) {
        return Restangular.all(baseUrl + '/' + idCaja + '/historialTransaccion').getList({
          idHistorial: idHistorial,
          filterText: filterText
        });
      },
      getVoucherCierreCaja: function (idCaja, idHistorial) {
        return Restangular.all(baseUrl + '/' + idCaja + '/historiales/voucherCierreCaja').getList({idHistorial: idHistorial});
      },
      getResumenCierreCaja: function (idCaja, idHistorial) {
        return Restangular.one(baseUrl + '/' + idCaja + '/historiales/resumenCierreCaja').get({idHistorial: idHistorial});
      },
      getHistoriales: function (idCaja, desde, hasta) {
        return Restangular.all(baseUrl + '/' + idCaja + '/historiales').getList({'desde': desde, 'hasta': hasta}, {});
      },
      getTransaccionBovedaCajaEnviadas: function (idCaja, idHistorial) {
        return Restangular.all(baseUrl + '/' + idCaja + '/transaccionBovedaCaja/enviados').getList({idHistorial: idHistorial});
      },
      getTransaccionBovedaCajaRecibidas: function (idCaja, idHistorial) {
        return Restangular.all(baseUrl + '/' + idCaja + '/transaccionBovedaCaja/recibidos').getList({idHistorial: idHistorial});
      },
      getTransaccionCajaCajaEnviadas: function (idCaja, idHistorial) {
        return Restangular.all(baseUrl + '/' + idCaja + '/transaccionCajaCaja/enviados').getList({idHistorial: idHistorial});
      },
      getTransaccionCajaCajaRecibidas: function (idCaja, idHistorial) {
        return Restangular.all(baseUrl + '/' + idCaja + '/transaccionCajaCaja/recibidos').getList({idHistorial: idHistorial});
      },
      getVoucherTransaccionBovedaCaja: function (idTransaccionBovedaCaja) {
        return Restangular.one(baseUrl + '/voucherTransaccionBovedaCaja/' + idTransaccionBovedaCaja).get();
      },
      getVoucherTransaccionCajaCaja: function (idTransaccionCajaCaja) {
        return Restangular.one(baseUrl + '/voucherTransaccionCajaCaja/' + idTransaccionCajaCaja).get();
      },

      crear: function (caja) {
        return Restangular.all(baseUrl).post(caja);
      },
      actualizar: function (idCaja, caja) {
        return Restangular.one(baseUrl + '/' + idCaja).customPUT(caja, '', {}, {});
      },
      crearTrabajador: function (idCaja, trabajador) {
        return Restangular.all(baseUrl + '/' + idCaja + '/trabajadores').post(trabajador);
      },
      getTrabajadorse: function (idCaja) {
        return Restangular.all(baseUrl + '/' + idCaja + '/trabajadores').getList();
      },
      eliminarTrabajador: function (idCaja, idTrabajador) {
        return Restangular.all(baseUrl + '/' + idCaja + '/trabajadores/' + idTrabajador).remove();
      },

      abrirCaja: function(idCaja){
        return Restangular.all(baseUrl+"/"+idCaja+"/abrir").post();
      },
      congelar: function(idBoveda) {
        return Restangular.one(baseUrl+"/"+idBoveda+"/congelar").post();
      },
      descongelar: function(idBoveda) {
        return Restangular.one(baseUrl+"/"+idBoveda+"/descongelar").post();
      }

    };

  }]);
