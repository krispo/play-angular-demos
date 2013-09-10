'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('mainApp', ['mainApp.controllers', 'mainApp.directives']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/highcharts-nggrid', {templateUrl: 'partials/highcharts-nggrid.html', controller: 'highcharts-nggridCtrl'});
	$routeProvider.otherwise({redirectTo: '/'});
}]);