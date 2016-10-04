/**
* ci2t Module
*
* Description
*/
var app=angular.module('ci2t', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "slider.html"
    })
    .when("/home", {
        templateUrl : "slider.html"
    })
    .when("/papers", {
        templateUrl : "papers.html"
    })
    .when("/extenso", {
        templateUrl : "extenso.html"
    })
    .when("/lineamientos", {
        templateUrl : "lineamientos.html"
    })
    .when("/contact", {
        templateUrl : "contacto.html"
    });
});

app.controller('controller1', function($scope){
	

	$scope.nombre="Erick"

	$scope.event=function  () {
		alert($scope.nombre)
	}

	$scope.array=[
		{name:"name1"},
		{name:"name2"},
		{name:"name4"},
		{name:"name5"},
		{name:"name6"},
		{name:"name5"}
	]

	$scope.json=function  (argument) {
		alert(argument);
	}
});