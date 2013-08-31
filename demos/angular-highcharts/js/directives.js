'use strict';

/* Directives */

angular.module('mainApp.directives', [])

/* HighChart Directive */
.directive('highchart', function () {
	return {
		restrict: 'E',
		template: '<div></div>',
		replace: true,

		link: function (scope, element, attrs) {
			
			scope.$watch(function() { return attrs.chart; }, function() {
				
				if(!attrs.chart) return;
				
				var chartOptions = scope.$eval(attrs.chart);
				
				element.highcharts(chartOptions);
				
			});			
		}
	}
});