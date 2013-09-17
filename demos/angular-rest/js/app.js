'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('mainApp', ['mainApp.controllers', 'mainApp.services']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/get', {templateUrl: 'partials/get.html', controller: 'getCtrl'});
	$routeProvider.when('/post', {templateUrl: 'partials/post.html', controller: 'postCtrl'});
	$routeProvider.otherwise({redirectTo: '/'});
}]);