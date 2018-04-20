// MODULE
var formulario = angular.module('formulario',['ngAria']);

formulario.controller('formController', function ($scope) {

	$scope.nuevoRegistro = {};

	$scope.nuevoRegistro.apellidoPaterno = "";
	$scope.nuevoRegistro.apellidoMaterno = "";
	$scope.nuevoRegistro.nombres = "";
	$scope.nuevoRegistro.licenciatura = "";
	$scope.nuevoRegistro.escuelaProcedencia = "";
	$scope.nuevoRegistro.fechaNacimiento = {dia: 1,mes: 1,year: 1994};
	$scope.nuevoRegistro.promedio = 0;
	$scope.nuevoRegistro.telefono = "";
	$scope.nuevoRegistro.mail = "";

	$scope.demo = function(){
		console.log("El objeto hasta el momento es: ",$scope.nuevoRegistro);
	}

});




