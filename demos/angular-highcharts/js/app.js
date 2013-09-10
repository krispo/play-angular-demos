'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('mainApp', ['mainApp.controllers', 'mainApp.directives']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/line', {templateUrl: 'partials/chart.html', controller: 'lineCtrl'});
	$routeProvider.when('/scatter', {templateUrl: 'partials/chart.html', controller: 'scatterCtrl'});
	$routeProvider.when('/bar', {templateUrl: 'partials/chart.html', controller: 'barCtrl'});
	$routeProvider.otherwise({redirectTo: '/'});
}]);