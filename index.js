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
    }).when("/pagos", {
        templateUrl : "pagos.html"
    })
	.when("/fechas", {
        templateUrl : "fechas.html"
    })
    .when("/articulo", {
        templateUrl : "articulo.html"
    })
    .when("/extenso", {
        templateUrl : "extenso.html"
    })
    .when("/hospedaje", {
        templateUrl : "hospedaje.html"
    })
    .when("/costos", {
        templateUrl : "costos.html"
    })
    .when("/conocer", {
        templateUrl : "conocer.html"
    })
    .when("/privacidad", {
        templateUrl : "privacidad.html"
    })
    .when("/sede", {
        templateUrl : "sede.html"
    })
    .when("/ci2t", {
        templateUrl : "ci2t.html"
    })
    .when("/lineamientos", {
        templateUrl : "lineamientos.html"
    })
    .when("/programa", {
        templateUrl : "programa.html"
    })
	.when("/talleres", {
        templateUrl : "talleres.html"
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