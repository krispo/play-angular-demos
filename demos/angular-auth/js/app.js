'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('mainApp', ['mainApp.controllers', 'mainApp.services', 'ngRoute', 'ngResource'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/qwe', {templateUrl: 'partials/event-list.html', controller: 'EventListCtrl'})
            .when('/', {templateUrl:'partials/login.html', controller: 'LoginCtrl'})
            .when('/logout', {templateUrl:'partials/login.html', controller: 'LogoutCtrl'})
            .otherwise({redirectTo: '/'});
    })
    .config(['$rootScope', function($httpProvider){
        $httpProvider.interceptors.push(function($rootScope,$location,$q){
            return {
                'request': function(request){
                    // if we're not logged-in to the AngularJS app, redirect to login page
                    $rootScope.loggedIn = $rootScope.loggedIn || $rootScope.username;
                    if (!$rootScope.loggedIn && $location.path() != '/login'){
                        $location.path('/login');
                    }
                    return request;
                },
                'responseError': function(rejection){
                    // if we're not logged-in to the web service, redirect to login page
                    if (rejection.status === 401 && $location.path() != '/login'){
                        $rootScope.loggedIn = false;
                        $location.path('/login');
                    }
                    return $q.reject(rejection);
                }
            };
        });
    }]);
