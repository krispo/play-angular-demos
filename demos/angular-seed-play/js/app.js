/*global define, angular */

'use strict';

// Declare here that angular is the US version - other locales can be easily substituted.

define('angular', ['webjars!angular.js'], function() {
    return angular;
});

define('angular-route', ['webjars!angular-route.js'], function(){});

require(['angular', 'angular-route', './controllers', './directives', './filters', './services'],
    function(angular) {

        // Declare app level module which depends on controllers, filters, services and directives

        angular.module('myApp', ['myApp.controllers', 'myApp.filters', 'myApp.services', 'myApp.directives', 'ngRoute']).
            config(['$routeProvider', function($routeProvider) {
                $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
                $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
                $routeProvider.otherwise({redirectTo: '/view1'});
            }]);

        angular.bootstrap(document, ['myApp']);

    });
