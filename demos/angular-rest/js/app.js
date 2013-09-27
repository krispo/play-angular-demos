'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('mainApp', ['mainApp.controllers', 'mainApp.services', 'ngResource']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/http', {templateUrl: 'partials/views.html', controller: 'httpCtrl'});
	$routeProvider.when('/resource', {templateUrl: 'partials/views.html', controller: 'resourceCtrl'});
	$routeProvider.otherwise({redirectTo: '/'});
}]);