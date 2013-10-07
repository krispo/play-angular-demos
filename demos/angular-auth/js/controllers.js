'use strict';

/* Controllers */

angular.module('mainApp.controllers', [])

    /* Login Controller */
    .controller('LoginCtrl', function($scope,$rootScope,$location,SessionService){
        $scope.user = {
            username:'',
            password:''
        };

        $rootScope.loggedIn = false;

        $scope.login = function(){
            SessionService.save($scope.user, function(success){
                console.log('!!!');
                console.log('success');
                $rootScope.loggedIn = true;
                $location.path('/');
            }, function(error){
                console.log('???');
                console.log(error);
                $rootScope.loginError = true;
            })
        }
    })
    .controller('EventListCtrl', function(){

    })