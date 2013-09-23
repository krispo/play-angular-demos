'use strict';

/* Controllers */

angular.module('mainApp.controllers', [])

    /* $http */
    .controller('httpCtrl', function($scope, $http, $rootScope){

        /*
         * Function definitions
         */
        $scope.getData = function (){
            return $http({method:'GET',url: '/api/findAll'})
                .success(function(data,status,headers,config){
                    console.log('!!! SUCCESS getData');
                    $scope.projectList = data;
                })
                .error(function(data,status,headers,config){
                    console.log('??? Failed getData...')
                });
        };

        //save to DB
        $scope.postData = function (data){
            return $http({method:'POST',url: '/api/create', data: data})
                .success(function(data,status,headers,config){
                    console.log('!!! SUCCESS postData');
                    $rootScope.$broadcast('getData'); // to update projectList with new data
                })
                .error(function(data,status,headers,config){
                    console.log('??? Failed postData...')
                });
        };

        //save or update in DB by document id
        $scope.putData = function (data){
            return $http({
                method:'PUT',
                url: '/api/update',
                params: {oid: data._id.$oid},
                data:{
                    name: data.name,
                    site: data.site,
                    description: data.description
                }
            })
                .success(function(data,status,headers,config){
                    console.log('!!! SUCCESS putData');
                    $rootScope.$broadcast('getData'); // to update projectList with new data
                })
                .error(function(data,status,headers,config){
                    console.log('??? Failed putData...')
                });
        };

        // remove from DB by document id - project._id.$oid
        $scope.deleteData = function (oid){
            return $http.delete('/api/delete', {params: {oid: oid}})
                .success(function(data,status,headers,config){
                    console.log('!!! SUCCESS deleteData');
                    $rootScope.$broadcast('getData'); // to update projectList with new data
                })
                .error(function(data,status,headers,config){
                    console.log('??? Failed deleteData...')
                });
        };

        /*
         * Retrieve data from DB and store it to $scope.data variable.
         * Initialize and refresh data after data is changed in DB
         */
        $scope.getData();

        // Catch the broadcast call
        $scope.$on('getData', function(){
            $scope.getData();
        });

        // initialize template for modal dialogs (add and edit project element)
        $scope.modalProject = {
            add:{},
            edit:{}
        };

        // return copy of any object
        $scope.getCopy = function(object){
           return angular.copy(object);
        }
    })

    /* $resource */
    .controller('resourceCtrl', function($scope){

    })