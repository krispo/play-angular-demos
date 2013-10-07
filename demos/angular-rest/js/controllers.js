'use strict';

/* Controllers */

angular.module('mainApp.controllers', [])

    /* $http */
    .controller('httpCtrl', function($scope, $http, $rootScope){

        /*
         * Function definitions
         */
        $scope.getProject = function (){
            return $http({method:'GET',url: '/api/rest/projects'})
                .success(function(data){
                    console.log('!!! SUCCESS getProject');
                    $scope.projects = data;
                })
                .error(function(){
                    console.log('??? Failed getProject...')
                });
        };

        //save to DB
        $scope.postProject = function (project){
            return $http({method:'POST',url: '/api/rest/projects', data: project})
                .success(function(data){
                    console.log('!!! SUCCESS postProject');
                    $rootScope.$broadcast('getProject'); // to update projects with new data
                })
                .error(function(){
                    console.log('??? Failed postProject...')
                });
        };

        //save or update in DB by document id
        $scope.putProject = function (project){
            return $http({
                method:'PUT',
                url: '/api/rest/projects/'+project._id.$oid,
                data:{
                    name: project.name,
                    site: project.site,
                    description: project.description
                }
            })
                .success(function(data){
                    console.log('!!! SUCCESS putProject');
                    $rootScope.$broadcast('getProject'); // to update projects with new data
                })
                .error(function(){
                    console.log('??? Failed putProject...')
                });
        };

        // remove from DB by document id - project._id.$oid
        $scope.deleteProject = function (oid){
            return $http.delete('/api/rest/projects/'+oid)
                .success(function(data){
                    console.log('!!! SUCCESS deleteProject');
                    $rootScope.$broadcast('getProject'); // to update projects with new data
                })
                .error(function(){
                    console.log('??? Failed deleteProject...')
                });
        };

        /*
         * Retrieve data from DB and store it to $scope.projects variable.
         * Initialize and refresh data after data is changed in DB
         */
        $scope.getProject();

        // Catch the broadcast call
        $scope.$on('getProject', function(){
            $scope.getProject();
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
    .controller('resourceCtrl', function($scope,$http,$rootScope,Project){
        /*
         * Function definitions
         */

        $scope.projects = Project.query(function(){
            console.log('!!! SUCCESS getProject Resource !!!');
        });

        //save to DB
        $scope.postProject = function (project){
            return new Project(project).$save(
                function(){
                    console.log('!!! SUCCESS postProject');
                    $rootScope.$broadcast('getProject'); // to update projects with new data
                },
                function(){
                    console.log('??? Failed postProject...')
                }
            );
        };

        //save or update in DB by document id
        $scope.putProject = function (project){
            var data = {
                name: project.name,
                site: project.site,
                description: project.description
            };
            return new Project(data).$update(
                {oid: project._id.$oid},
                function(){
                    console.log('!!! SUCCESS putProject');
                    $rootScope.$broadcast('getProject'); // to update projects with new data
                },function(){
                    console.log('??? Failed putProject...')
                });
        };

        // remove from DB by document id - project._id.$oid
        $scope.deleteProject = function (oid){
            return new Project().$delete(
                {oid: oid},
                function(){
                    console.log('!!! SUCCESS deleteProject');
                    $rootScope.$broadcast('getProject'); // to update projects with new data
                },
                function(){
                    console.log('??? Failed deleteProject...')
                });
        };

        /*
         * Retrieve data from DB and store it to $scope.projects variable.
         * Initialize and refresh data after data is changed in DB
         */

        // Catch the broadcast call
        $scope.$on('getProject', function(){
            $scope.projects = Project.query();
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

    });

