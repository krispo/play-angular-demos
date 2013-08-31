'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('mainApp', ['mainApp.controllers', 'mainApp.directives']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/line', {templateUrl: 'partials/chart.html', controller: 'ctrl_line'});
	$routeProvider.when('/scatter', {templateUrl: 'partials/chart.html', controller: 'ctrl_scatter'});
	$routeProvider.when('/bar', {templateUrl: 'partials/chart.html', controller: 'ctrl_bar'});
	$routeProvider.otherwise({redirectTo: '/'});
}]);