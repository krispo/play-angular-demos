'use strict';

/* Controllers */

angular.module('mainApp.controllers', ['ngGrid'])

    /* HighCharts - ng-Grid */
    .controller('highcharts-nggridCtrl', function($scope){
        $scope.data = [
            {id: 1, x: 5, y: 3},
            {id: 2, x: 10, y: 17},
            {id: 3, x: 15, y: 4},
            {id: 4, x: 2, y: 8}
        ];

        $scope.selectedPoints = $scope.data;

        $scope.gridOptions = {
            data: 'selectedPoints',
            enableCellEdit: true,
            multiSelect: false,
            columnDefs:[
                {
                    field: 'x',
                    displayName: 'X',
                    enableCellEdit: true
                },
                {
                    field: 'y',
                    displayName: 'Y',
                    enableCellEdit: true
                }
            ]
        };

        $scope.chartOptions = highcharts_nggrid_option($scope);
    })

    /* HighCharts - SlickGrid */
    .controller('highcharts-slickgridCtrl', function($scope){
        //init data
        $scope.data = [
            {id: 1, x: 5, y: 3},
            {id: 2, x: 10, y: 17},
            {id: 3, x: 15, y: 4},
            {id: 4, x: 2, y: 8}
        ];

        $scope.columns = [
            {id: "id", name: "ID", field: "id"},
            {id: "x", name: "X", field: "x", editor: Slick.Editors.Text},
            {id: "y", name: "Y", field: "y", editor: Slick.Editors.Text}
        ];
        $scope.options = {
            editable: true,
            enableCellNavigation: true,
            enableColumnReorder: true,
            asyncEditorLoading: false,
            autoEdit:false,
            multiSelect: false
        };
        // end init data

        $scope.gridOptions = {
            data: $scope.data,
            columns: $scope.columns,
            options: $scope.options
        };

        $scope.chartOptions = highcharts_slickgrid_option($scope);

        /* Selection */
        $scope.chartSelectedID = [];
        $scope.gridSelectedID = [];
    });

function highcharts_nggrid_option(scope){
    return {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Scatter Plot'
        },
        plotOptions: {
            scatter: {
                allowPointSelect: true,
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'id={point.id}, x={point.x}, y={point.y}'
                },
                cursor: 'pointer',
                point: {
                    events: {
                        select: function() {
                            scope.selectedPoints = [];
                            scope.selectedPoints.push(scope.data[this.id-1]);
                            scope.$apply();
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Series',
            color: 'rgba(223, 83, 83, .5)',
            data: scope.data
        }]
    };
};

function highcharts_slickgrid_option(scope){
    return {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Scatter Plot'
        },
        plotOptions: {
            scatter: {
                allowPointSelect: true,
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'id={point.id}, x={point.x}, y={point.y}'
                },
                cursor: 'pointer',
                point: {
                    events: {
                        select: function() {
                            scope.chartSelectedID = this.id-1;
                            scope.$apply();
                            if(scope.chartSelectedID!=scope.gridSelectedID){
                                scope.grid.setSelectedRows([this.id-1]);
                            }
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Series',
            color: 'rgba(223, 83, 83, .5)',
            data: scope.data
        }]
    };
};