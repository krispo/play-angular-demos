'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('mainApp', ['mainApp.controllers', 'ngRoute']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/resetmodel', {templateUrl: 'partials/resetmodel.html', controller: 'resetmodelCtrl'});
	$routeProvider.otherwise({redirectTo: '/'});
}]);