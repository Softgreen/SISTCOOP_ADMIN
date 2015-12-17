'use strict';

/* jshint -W098 */
angular.module('configuracion').controller('ConfiguracionController', ['$scope', 'Auth',
    function ($scope, Auth) {

        $scope.package = {
            name: 'configuracion'
        };

        function getAccess(role) {
            return false;
        }

        $scope.access = {
            get createRealm() {
                return Auth.user && Auth.user.createRealm;
            }
        };

    }
]);
