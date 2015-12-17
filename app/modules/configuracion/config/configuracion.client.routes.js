'use strict';

// Setting up route
angular.module('configuracion').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.when('/configuracion/app/monedas/tipocambio', '/configuracion/app/monedas/tipocambio/buscar');

        $stateProvider
            .state('configuracion', {
                abstract: true,
                url: '/configuracion',
                templateUrl: 'modules/configuracion/views/_body.html',
                controller: 'ConfiguracionController'
            })
            .state('configuracion.home', {
                url: '/home',
                templateUrl: 'modules/configuracion/views/index.html',
                ncyBreadcrumb: {
                    label: 'Index'
                }
            })
            .state('configuracion.app', {
                url: '/app',
                template: '<div ui-view></div>',
                ncyBreadcrumb: {
                    skip: true // Never display this state in breadcrumb.
                }
            })

            .state('configuracion.app.moneda', {
                url: '/monedas',
                template: '<div ui-view></div>',
                abstract: true
            })
            .state('configuracion.app.otro', {
                url: '/otros',
                template: '<div ui-view></div>',
                abstract: true
            })

            //monedas
            .state('configuracion.app.moneda.tipocambio', {
                url: '/tipocambio',
                template: '<div ui-view></div>',
                ncyBreadcrumb: {
                    skip: true // Never display this state in breadcrumb.
                }
            })
            .state('configuracion.app.moneda.tipocambio.buscar', {
                url: '/buscar',
                templateUrl: 'modules/configuracion/views/moneda/tipoCambio/form-buscar.html',
                controller: 'Configuracion.Moneda.TipoCambio.BuscarController',
                resolve: {},
                ncyBreadcrumb: {
                    label: 'Home'
                }
            });
    }
]);
