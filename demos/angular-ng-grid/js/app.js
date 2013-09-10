'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('mainApp', ['mainApp.controllers']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/basic', {templateUrl: 'partials/basic.html', controller: 'basicCtrl'});
	$routeProvider.when('/editing', {templateUrl: 'partials/editing.html', controller: 'editingCtrl'});
	$routeProvider.otherwise({redirectTo: '/'});
}]);