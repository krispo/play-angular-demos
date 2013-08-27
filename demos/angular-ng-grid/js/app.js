'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('mainApp', [
	'mainApp.filters', 
	'mainApp.services', 
	'mainApp.directives', 
	'mainApp.controllers']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/basic', {templateUrl: 'partials/basic.html', controller: 'ctrl_basic'});
	$routeProvider.when('/editing', {templateUrl: 'partials/editing.html', controller: 'ctrl_editing'});	
	$routeProvider.otherwise({redirectTo: '/'});
}]);