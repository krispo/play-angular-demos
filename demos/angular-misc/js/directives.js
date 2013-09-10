'use strict';

/* Directives */

angular.module('mainApp.directives', [])

    /* HighChart Directive */
    .directive('highchart', function () {
        return {
            restrict: 'E',
            template: '<div style="float: left; width:400px; height:400px;"></div>',
            replace: true,
            link: function (scope, element, attrs) {
                var chart = element.highcharts();

                scope.$watch(function() { return attrs.chart; }, function() {

                    if(!attrs.chart) return;

                    var chartOptions = scope.$eval(attrs.chart);

                    chart = element.highcharts(chartOptions);
                    chart
                });
            }
        }
    });