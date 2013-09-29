'use strict';

/* Services */

angular.module('mainApp.services', [])
    .factory('SessionService', function($resource){
        return $resource('/api/sessions');
    })