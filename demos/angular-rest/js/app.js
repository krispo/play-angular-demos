'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('mainApp', ['mainApp.controllers', 'mainApp.services']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/http', {templateUrl: 'partials/http.html', controller: 'httpCtrl'});
	$routeProvider.when('/resource', {templateUrl: 'partials/resource.html', controller: 'resourceCtrl'});
	$routeProvider.otherwise({redirectTo: '/'});
}]);