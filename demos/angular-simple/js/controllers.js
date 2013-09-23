'use strict';

/* Controllers */

angular.module('mainApp.controllers', [])

    /* resetmodel */
    .controller('resetmodelCtrl', function($scope){

        $scope.initial = [{
            data1: 10,
            data2: 20
        }];

        $scope.datas = angular.copy($scope.initial);

        $scope.reset = function () {

            $scope.datas = angular.copy($scope.initial);
            // or
            // angular.copy($scope.initial, $scope.datas);
        }
    })