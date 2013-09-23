'use strict';

/* Controllers */

angular.module('mainApp.controllers', [])

    /* resetmodel */
    .controller('resetmodelCtrl', function($scope){

        $scope.initial = [{
            data1: 10,
            data2: 20
        }];

        $scope.initialAssign = $scope.initial;

        $scope.initialCopy = angular.copy($scope.initial);

        $scope.reset = function () {

            $scope.initialCopy = angular.copy($scope.initial);
            // or
            // angular.copy($scope.initial, $scope.initialCopy);
        }
    })