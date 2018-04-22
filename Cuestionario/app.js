// MODULE
var formulario = angular.module('formulario',['ngAria','ngMaterial', 'ngMessages' ]);

formulario.controller('formController', function ($scope, $window) {

	this.myDate = new Date;
	this.isOpen = false;

	$scope.tabIndex;

	$scope.nextTab = function()
	{

		$window.scrollTo(0, 0);
		$scope.tabIndex = $scope.tabIndex +1;
	}

	
	$scope.nuevoRegistro = {};

	$scope.nuevoRegistro.apellidoPaterno = "";
	$scope.nuevoRegistro.apellidoMaterno = "";
	$scope.nuevoRegistro.nombres = "";
	$scope.nuevoRegistro.licenciatura = "";
	$scope.nuevoRegistro.escuelaProcedencia = "";
	$scope.nuevoRegistro.fechaNacimiento = {dia: 1,mes: 1,year: 1994};
	$scope.nuevoRegistro.promedio = 0;
	$scope.nuevoRegistro.telefonoCasa = "";
	$scope.nuevoRegistro.telefonoCelular = "";
	$scope.nuevoRegistro.mail = "";
	$scope.nuevoRegistro.face = "";
	$scope.nuevoRegistro.twitter = "";
	$scope.nuevoRegistro.tipoSanguineo = "";


	$scope.nuevoRegistro.respuesta11 = "";
	$scope.nuevoRegistro.respuesta12 = "";
	$scope.nuevoRegistro.respuesta13 = "";
	$scope.nuevoRegistro.respuesta131 = "";
	$scope.nuevoRegistro.respuesta14 = "";
	$scope.nuevoRegistro.respuesta15 = "";

	$scope.nuevoRegistro.respuesta21 = "";
	$scope.nuevoRegistro.respuesta22 = "";
	$scope.nuevoRegistro.respuesta23 = "";
	$scope.nuevoRegistro.respuesta24 = "";
	$scope.nuevoRegistro.respuesta25 = "";
	$scope.nuevoRegistro.respuesta26 = "";
	$scope.nuevoRegistro.respuesta27 = "";
	$scope.nuevoRegistro.respuesta28 = "";
	$scope.nuevoRegistro.promediosn23 = "";

	$scope.nuevoRegistro.respuesta31 = "";
	$scope.nuevoRegistro.respuesta32padre = "";
	$scope.nuevoRegistro.respuesta32madre = "";
	$scope.nuevoRegistro.respuesta33 = "";
	$scope.nuevoRegistro.respuesta34 = "";

	$scope.submit = function(){}

	$scope.demo = function(){
		console.log("El objeto hasta el momento es: ",$scope.nuevoRegistro);

	}

});




