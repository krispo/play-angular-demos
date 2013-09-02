'use strict';

/* Controllers */

angular.module('mainApp.controllers', ['ngGrid'])

/* Basic ng-Grid */
.controller('ctrl_basic', function($scope) {
	$scope.myData = [
	{name: "Moroni", age: 50},
	{name: "Tiancum", age: 43},
	{name: "Jacob", age: 27},
	{name: "Nephi", age: 29},
	{name: "Enos", age: 34}];	
	
	$scope.gridOptions = { data: 'myData'};
})

/* Editable ng-Grid */
.controller('ctrl_editing', function($scope) {
	$scope.current_selection = [];

	$scope.myData = [
	{name: "Moroni", age: 50},
	{name: "Tiancum", age: 43},
	{name: "Jacob", age: 27},
	{name: "Nephi", age: 29},
	{name: "Enos", age: 34}];
	
	$scope.elem = $scope.myData[$scope.myData.length -1];
	$scope.gridOptions = { 
		data: 'myData',
		selectedItems: $scope.current_selection,
		//enableCellSelection: true,
		//enableRowSelection: false,
		enableCellEdit: true,
		multiSelect: false,
		columnDefs:[
		{
			field: 'name',
			displayName: 'Name',
			enableCellEdit: true
		},
		{
			field: 'age',
			displayName: 'Age',
			enableCellEdit: true
		}
		]
	};
})