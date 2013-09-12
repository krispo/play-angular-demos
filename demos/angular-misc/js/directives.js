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
                        var selectedRows = scope.grid.getSelectedRows();

                        /*for(var i=0; i<selectedRows.length; i++){
                            console.log(scope.chart.series[0].data[selectedRows[i]].select());
                        }*/

                        console.log('!!! Grid Selection...');
                    })

                    console.log(scope.grid);

                });
            }
        }
    });