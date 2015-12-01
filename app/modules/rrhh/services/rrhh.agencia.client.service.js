'use strict';

angular.module('rrhh').factory('AgenciaService', ['Restangular',
    function (Restangular) {

        var baseUrl = 'agencias';

        return {
            crear: function (agencia) {
                return Restangular.all(baseUrl).post(agencia);
            },
            getAgencia: function (idAgencia) {
                return Restangular.one(baseUrl + '/' + idAgencia).get();
            },
            getAgencias: function () {
                return Restangular.all(baseUrl).getList();
            },

            findById: function (id) {
                return Restangular.one(baseUrl + '/' + id).get();
            }

        };

    }]);