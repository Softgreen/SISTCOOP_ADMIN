'use strict';

/* jshint -W098 */
angular.module('configuracion').controller('Configuracion.Moneda.TipoCambio.BuscarController',
  function ($scope, $state, toastr, TasaInteresService) {

    $scope.monedas = {
      dolar: {id: 0, denominacion: 'Dolar americano'},
      nuevoSol: {id: 1, denominacion: 'Nuevo sol'},
      euro: {id: 2, denominacion: 'Euro'}
    };

    $scope.view = {
      tasaCompraDolar: undefined,
      tasaVentaDolar: undefined,
      tasaCompraEuro: undefined,
      tasaVentaEuro: undefined
    };

    $scope.loadTasas = function () {
      TasaInteresService.getTasaCambio($scope.monedas.nuevoSol.id, $scope.monedas.dolar.id).then(function (response) {
        $scope.view.tasaVentaDolar = response.valor;
      });
      TasaInteresService.getTasaCambio($scope.monedas.dolar.id, $scope.monedas.nuevoSol.id).then(function (response) {
        $scope.view.tasaCompraDolar = response.valor;
      });

      TasaInteresService.getTasaCambio($scope.monedas.nuevoSol.id, $scope.monedas.euro.id).then(function (response) {
        $scope.view.tasaVentaEuro = response.valor;
      });
      TasaInteresService.getTasaCambio($scope.monedas.euro.id, $scope.monedas.nuevoSol.id).then(function (response) {
        $scope.view.tasaCompraEuro = response.valor;
      });
    };
    $scope.loadTasas();

    $scope.guardarTasaCompraDolar = function () {
      TasaInteresService.setTasaCambio($scope.monedas.nuevoSol.id, $scope.monedas.dolar.id, $scope.view.tasaCompraDolar).then(
        function (response) {
          toastr.success('Tasa actualizada');
        }, function error(err) {
          toastr.error(err.data.errorMessage);
        }
      );
    };
    $scope.guardarTasaVentaDolar = function () {
      TasaInteresService.setTasaCambio($scope.monedas.dolar.id, $scope.monedas.nuevoSol.id, $scope.view.tasaVentaDolar).then(
        function (response) {
          toastr.success('Tasa actualizada');
        }, function error(err) {
          toastr.error(err.data.errorMessage);
        }
      );
    };

    $scope.guardarTasaCompraEuro = function () {
      TasaInteresService.setTasaCambio($scope.monedas.nuevoSol.id, $scope.monedas.euro.id, $scope.view.tasaCompraEuro).then(
        function (response) {
          toastr.success('Tasa actualizada');
        }, function error(err) {
          toastr.error(err.data.errorMessage);
        }
      );
    };
    $scope.guardarTasaVentaEuro = function () {
      TasaInteresService.setTasaCambio($scope.monedas.euro.id, $scope.monedas.nuevoSol.id, $scope.view.tasaVentaEuro).then(
        function (response) {
          toastr.success('Tasa actualizada');
        }, function error(err) {
          toastr.error(err.data.errorMessage);
        }
      );
    };

  }
);
