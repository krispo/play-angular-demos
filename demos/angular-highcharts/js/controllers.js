'use strict';

/* Controllers */

angular.module('mainApp.controllers', [])

/* Line Chart */
.controller('ctrl_line', function($scope){
	$scope.chartOptions = {
		xAxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		},

		plotOptions: {
			series: {
				cursor: 'pointer',
				point: {
					events: {
						click: function() {
							alert ('Category: '+ this.category +', value: '+ this.y);
						}
					}
				}
			}
		},

		series: [{
			data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
		}]
	};
})

/* Scatter Chart */
.controller('ctrl_scatter', function($scope){
	$scope.chartOptions = {
		chart: {  
			type: 'scatter',
			zoomType: 'xy'
		},
		title: {
			text: 'Scatter Plot'
		},
		subtitle: {
			text: 'Just a Sample'
		},
		xAxis: {
			title: {
				enabled: true,
				text: 'x Axis'
			},
			startOnTick: true,
			endOnTick: true,
			showLastLabel: true
		},
		yAxis: {
			title: {
				text: 'y Axis'
			}
		},
		legend: {
			layout: 'vertical',
			align: 'left',
			verticalAlign: 'top',
			x: 100,
			y: 70,
			floating: true,
			backgroundColor: '#FFFFFF',
			borderWidth: 1
		},
		plotOptions: {
			scatter: {
				marker: {
					radius: 5,
					states: {
						hover: {
							enabled: true,
							lineColor: 'rgb(100,100,100)'
						}
					}
				},
				states: {
					hover: {
						marker: {
							enabled: false
						}
					}
				},
				tooltip: {
					headerFormat: '<b>{series.name}</b><br>',
					pointFormat: 'x={point.x}, y={point.y}'
				},
				cursor: 'pointer',
				point: {
					events: {
						click: function() {
							alert ('Click event: '
								+ 'name=' + this.series.name
								+ ', x=' + this.x 
								+ ', y=' + this.y);
						}
					}
				}
			}
		},
		series: [{
			name: 'First Group',
			color: 'rgba(223, 83, 83, .5)',
			data: [[5,3], [10,17], [15,4], [2,8]]
		}, {
			name: 'Second Group',
			color: 'rgba(119, 152, 191, .5)',
			data: [[12,8], [3,4], [1,1], [20,10]]
		}]
	};
})

/* Bar Chart */
.controller('ctrl_bar', function($scope) {
	$scope.chartOptions = {
		chart: {			
			type: 'bar'
		},
		title: {
			text: 'Fruit Consumption'
		},
		xAxis: {
			categories: ['Apples', 'Bananas', 'Oranges']
		},
		yAxis: {
			title: {
				text: 'Fruit eaten'
			}
		},
		series: [{
			name: 'Jane',
			data: [1, 0, 4]
		}, {
			name: 'John',
			data: [5, 7, 3]
		}]
	};	
})

