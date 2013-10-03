'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('mainApp', ['mainApp.controllers', 'mainApp.services', 'ngResource', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('http',{
                url: '/http',
                templateUrl: 'partials/views.html',
                controller: 'httpCtrl'
            })
            .state('resource',{
                url: '/resource',
                templateUrl: 'partials/views.html',
                controller: 'resourceCtrl'
            })
    })
