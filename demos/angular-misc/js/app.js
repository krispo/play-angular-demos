'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('mainApp', ['mainApp.controllers', 'mainApp.directives']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/chartgrid', {templateUrl: 'partials/chartgrid.html', controller: 'ctrl_chartgrid'});
	$routeProvider.otherwise({redirectTo: '/'});
}]);