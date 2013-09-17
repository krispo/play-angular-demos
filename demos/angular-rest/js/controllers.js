'use strict';

/* Controllers */

angular.module('mainApp.controllers', [])

    /* GET */
    .controller('getCtrl', function($scope, $http){

        function getData1(){
            return '!!! DATA !!!'
        };

        function getData2(){
            return $http({method:'GET',url: '/api/data'})
                .success(function(data,status,headers,config){
                    return console.log('!!! SUCCESS 2')
                })
                .error(function(data,status,headers,config){
                    return console.log('??? Failed...')
                });
        };

        function getData3(){
            return $http.get('/api/data')
                .success(function(){
                    return console.log('!!! SUCCESS 3')
                })
                .error(function(){
                    return console.log('??? Failed...')
                });
        };

        $scope.data1 = getData1();
        $scope.data2 = getData2();
        $scope.data3 = getData3();
    })

    /* POST */
    .controller('postCtrl', function($scope){

    })