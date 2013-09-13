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
                    chartOptions.chart.renderTo = attrs.id;

                    scope.chart = new Highcharts.Chart(chartOptions);
                    console.log(scope.chart);
                });
            }
        }
    })

    /* SlickGrid directive */
    .directive('slickgrid', function(){
        return{
            restrict:'EA',
            template:'<div></div>',
            replace:true,
            link: function(scope,element,attrs){

                scope.$watch(attrs.options,function(){
                    if(!attrs.options) return //console.log('??? Failed SlickGrid directive...');

                    var gridOptions = scope.$eval(attrs.options);
                    //console.log('!!! SlickGrid directive !!!');
                    //console.log(gridOptions);

                    scope.grid = new Slick.Grid(element, gridOptions.data, gridOptions.columns, gridOptions.options);

                    scope.grid.setSelectionModel(new Slick.CellSelectionModel());

                    scope.grid.onSelectedRowsChanged.subscribe(function(e,args){
                        var selectedRow = scope.grid.getDataItem(scope.grid.getSelectedRows()[0]);

                        scope.gridSelectedID = selectedRow.id;
                        scope.$apply();

                        if(scope.chartSelectedID!=scope.gridSelectedID){
                            var data = scope.chart.series[0].data;
                            var pointID = [];
                            for(var i=0;i<data.length;i++){
                                if(data[i].id==selectedRow.id) pointID = i;
                            }
                            scope.chart.series[0].data[pointID].select(true,false); //clear all other selection
                        };
                    });

                    scope.grid.onCellChange.subscribe(function(e,args){
                        var item = args.item;
                        var data = scope.chart.series[0].data;
                        var pointID = [];
                        for(var i=0;i<data.length;i++){
                            if(data[i].id==item.id) pointID = i;
                        }
                        data[pointID].update(item);
                    });

                    console.log(scope.grid);
                });
            }
        }
    });