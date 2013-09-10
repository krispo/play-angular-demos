'use strict';

/* Directives */

angular.module('mainApp.directives',[])

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

                    console.log(scope.grid);

                    if(gridOptions.options.enableAddRow) {

                        scope.grid.setSelectionModel(new Slick.CellSelectionModel());

                        scope.grid.onAddNewRow.subscribe(function(e,args){
                            var item = args.item;
                            scope.grid.invalidateRow(gridOptions.data.length);
                            gridOptions.data.push(item);
                            scope.grid.updateRowCount();
                            scope.grid.render();
                        });
                    }

                });
            }
        }
    });