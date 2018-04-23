// MODULE
var formulario = angular.module('formulario',['ngAria','ngMaterial', 'ngMessages' ]);

formulario.controller('formController', function ($scope, $window, $mdDialog) {

	this.myDate = new Date;
	this.isOpen = false;

	$scope.xmlHttp = new XMLHttpRequest();


	$scope.tabIndex;

	$scope.nextTab = function()
	{

		$window.scrollTo(0, 0);
		$scope.tabIndex = $scope.tabIndex +1;
	}

	$scope.estadosNombres = ["Aguascalientas", "Baja California", "Baja California Sur", "Campeche", "Chipas", "Chihuahua", "Coahuila", "Colima", "Cd. de México", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Edo. de México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"];

	$scope.estadosAbrev = ["AS", "BC", "BS", "CC", "CS", "CH", "CL", "CM", "DF", "DG", "GT", "GR", "HG", "JC", "MC", "MN", "MS", "NT", "NL", "OC", "PL", "QT", "QR", "SP", "SL", "SR", "TC", "TS", "TL", "VZ", "YN", "ZS"];

	$scope.estados = [];

	$scope.estadosNombres.forEach(function(estado, idxEstado){
		
		var objeto = {};
		objeto.nombre = estado;
		objeto.abreviacion = $scope.estadosAbrev[idxEstado];

		$scope.estados.push(objeto);
	});

	$scope.nuevoRegistro = {}

	$scope.escuelasNormales = [

	{nombre: "Benemérito Instituto Normal del Estado de Puebla", licenciaturas: ["Educación Inicial", "Educación Preescolar", "Educación Primaria", "Educación Física", "Educación Secundaria (Telesecundaria)", "Educación Especial"]},
	{nombre: "Escuela Normal Oficial Lic. Benito Juárez", licenciaturas: ["Primaria Intercultural Bilingüe", "Educación Secundaria (Telesecundaria)", "Educación Especial"]},
	{nombre: "Escuela Normal Profr. Darío Rodríguez Cruz", licenciaturas: ["Educación Preescolar", "Educación Primaria", "Educación Secundaria (Telesecundaria)"]},
	{nombre: "Escuela Normal Profr. Fidel Meza y Sánchez", licenciaturas: ["Educación Inicial", "Educación Preescolar", "Preescolar Intercultural Bilingüe"]},
	{nombre: "Escuela Normal Rural Carmen Serdán", licenciaturas:["Educación Preescolar", "Educación Primaria", "Educación Secundaria (Telesecundaria)"]},
	{nombre: "Escuela Normal Superior de Tehuacán", licenciaturas:["Educación Inicial", "Educación Preescolar", "Educación Primaria", "Educación Secundaria (Telesecundaria)", "Educación Secundaria (Español)"]},
	{nombre: "Escuela Normal Superior del Estado de Puebla", licenciaturas:["Educación Secundaria (Telesecundaria)", "Educación Secundaria (Español)", "Educación Secundaria (Matemáticas)", "Educación Secundaria (Historia)", "Educación Secundaria (Formac. Cív. y Ética)", "Educación Secundaria (Biología)", "Educación Secundaria (Física)", "Educación Secundaria (Química)", "Educación Secundaria (Inglés)"]},
	{nombre: "Escuela Normal Superior Federalizada del Estado de Puebla", licenciaturas:["Educación Inicial", "Educación Preescolar", "Educación Primaria", "Educación Secundaria (Telesecundaria)", "Educación Secundaria (Español)", "Educación Secundaria (Matemáticas)", "Educación Secundaria (Inglés)"]},
	{nombre: "Instituto Jaime Torres Bodet", licenciaturas:["Educación Inicial", "Educación Preescolar", "Educación Secundaria (Español)", "Educación Secundaria (Matemáticas)", "Educación Secundaria (Inglés)", "Educación Secundaria (Biología)"]},
	{nombre: "Escuela Normal Primaria Profr. Jesús Merino Nieto", licenciaturas:["Primaria Intercultural Bilingüe", "Educación Secundaria (Telesecundaria)"]}
	];

	$scope.nuevoRegistro.curp="";
	$scope.nuevoRegistro.apellidoPaterno = "";
	$scope.nuevoRegistro.apellidoMaterno = "";
	$scope.nuevoRegistro.nombres = "";
	$scope.nuevoRegistro.fechaNacimiento = "";
	$scope.nuevoRegistro.curp = "";
	$scope.nuevoRegistro.normal = "";
	$scope.nuevoRegistro.normalObjeto = {};
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

	$scope.curpRefresh = function(){

		var objetoCurp = {};

		objetoCurp.nombre = $scope.nuevoRegistro.nombres;
		objetoCurp.apellido_paterno = $scope.nuevoRegistro.apellidoPaterno;
		obejtoCurp.apellido_materno = $scope.nuevoRegistro.apellidoMaterno;


	}

	$scope.cambioDeNormal = function(){
		$scope.nuevoRegistro.normal = $scope.nuevoRegistro.normalObjeto.nombre;
	}

	$scope.submit = function(){

		var valoresEnviar = $scope.everythingToUpperCase($scope.nuevoRegistro);

		console.log("LOS VALORES CAPTURADOS EN EL OBJETO SON: ",valoresEnviar);

		$scope.xmlHttp.open("GET","http://localhost:5001/insertStudent?nuevosValores="+JSON.stringify(valoresEnviar),true);
		$scope.xmlHttp.send(null);

	}


	$scope.everythingToUpperCase = function(valor){

		delete $scope.nuevoRegistro.normalObjeto;

		var llaves = Object.keys(valor);

		llaves.forEach(function(key){

			if(typeof(valor[key]) === "string"){
				valor[key] = valor[key].toUpperCase();
			}
		})

		return valor;

	}

	$scope.showAdvanced = function(ev) {
		$mdDialog.show({
			locals:{parentScope:$scope},//<---- AQUI VAN TODAS LAS VARIABLES QUE QUIERAS INYECTAR AL SCOPE DEL DIALOGO
			templateUrl: 'dialog1.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
			fullscreen: $scope.customFullscreen, // Only for -xs, -sm breakpoints.
			controller: ['$scope','vars','todos','parentScope',function($scope,vars,todos,parentScope){
					$scope.x = vars.x;//dentro del scope del dialogo se guarda la variable x
					$scope.y = vars.y;//dentro del scope del dialogo se guarda la variable y
					$scope.todos = todos;//dentro del scope del dialgo se guarda la informacion de los beacons obtenida de la base de datos
					$scope.parentScope = parentScope;


					$scope.seleccionado = $scope.todos.find(function(item){
						return item.x == $scope.x && item.y == $scope.y;
					});

					if($scope.seleccionado){
						console.log("ITEM SELECCIONADO: ",$scope.seleccionado);
						$scope.seleccionado.done = true;
					}

					/*Metodo utilizado para responder a los clicks del checkbox de la lista*/
					$scope.checkBoxClick = function(estado,elemento){

						//aqui se deseleccionan todos los elementos
						$scope.todos.forEach(function(x){
							x.done  = false;
						})

						//Aqui se selecciona solo aquel elemento al que se le hizo click
						if(estado)
						{
							elemento.done = true;
						}
					}

					/*Este metodo es el encargado de llevar acabo las acciones necesarias cuando se selecciona el modo bajo el cual opera el beacon*/
					$scope.modeCheckBoxClick = function(item){
						/*Por medio de este if usando el atributo modeBool se cambia el valor en el objeto correspondiente y a su vez el texto en la interfaz*/
						if(item.modeBool){
							item.mode = "programmer";
						}
						else{
							item.mode = "scanner";
						}
					}

					/*Este es el metodo que se manda a llamar cuando el usuario cierra la ventana por medio de los botones "cancelar" o "guardar"*/
					$scope.answer = function(seleccion)
					{
						/*Si el boton precionado fue guardar*/
						if(seleccion){
							/*Entonces se verificaran todos los elementos dentro de la lista para registrar los cambios en la base de datos*/
							var toBeDeleted = false;

							$scope.todos.forEach(function(item){
								
								toBeDeleted = toBeDeleted || item.done;

								var nuevosValores = {};
								var nuevosValoresJsonString = "";
								nuevosValores.chipid = item.chipid;


								console.log("VALOR DE LOS CHECKBOX: ",item.modeBool);

								if(item.done){
									console.log(item.chipid, "ha sido seleccionado");

									nuevosValores.x = $scope.x;
									nuevosValores.y = $scope.y;


									// xmlHttp.open("GET","http://localhost:5000/updateBeacon?x="+$scope.x+"&y="+$scope.y+"&chipid="+item.chipid,true);
									// xmlHttp.open("GET","http://localhost:5000/updateBeacon?nuevosValores="+nuevosValoresJsonString,true);


									//console.log(xmlHttp.responseText);
								}
								else
								{
									console.log(item.chipid, "esta deseleccionado");
								}

								if(item.marj == undefined){
									nuevosValores.marj = "CACA";
								}else{
									nuevosValores.marj = item.marj;
									console.log("marj en navegador: ",item.marj);
								}

								if(item.mino == undefined){
									nuevosValores.mino = "BEBE";
								}else{
									nuevosValores.mino = item.mino;
									console.log("mino en navegador: ",item.mino);
								}

								nuevosValores.mode = item.mode;

								nuevosValoresJsonString = JSON.stringify(nuevosValores);
								xmlHttp.open("GET","http://localhost:5000/updateBeacon?nuevosValores="+nuevosValoresJsonString,true);
								xmlHttp.send(null);

							});

							if(!toBeDeleted){
								console.log("SE VAN A ELIMINAR LAS COORDENADAS");
								xmlHttp.open("GET","http://localhost:5000/removeBeaconMap?x="+$scope.x+"&y="+$scope.y,true);
								xmlHttp.send(null);
							}

							console.log("$scope.datos",$scope.datos);
							console.log("$scope.parentScope.datos",$scope.parentScope.datos)

							$scope.xmlHttp = new XMLHttpRequest();
							
							var something = function(){

								$scope.parentScope.arregloDemo = $scope.xmlHttp.responseText.match(/{.+?}/g);

								$scope.parentScope.valoresDialogo = []

								$scope.parentScope.arregloDeDatos = []

								console.log("arregloDemo: ",$scope.parentScope.arregloDemo);

								$scope.parentScope.arregloDemo.forEach(function(item){
									console.log("STRING JSON: ",item,"OBJETO JSON: ",JSON.parse(item));
									$scope.parentScope.valoresDialogo.push(JSON.parse(item));
								});

								for(var i = 0;i<$scope.parentScope.valoresDialogo.length;i++)
								{
									$scope.parentScope.datos[$scope.parentScope.valoresDialogo[i].chipid] = $scope.parentScope.valoresDialogo[i];
									$scope.parentScope.datos[$scope.parentScope.valoresDialogo[i].chipid].distancia = 1000;
									$scope.parentScope.datos[$scope.parentScope.valoresDialogo[i].chipid].latency = 0;
									$scope.parentScope.datos[$scope.parentScope.valoresDialogo[i].chipid].past = 0;
								}

								$scope.parentScope.initEverything();
								
							}

							$scope.xmlHttp.onreadystatechange = something;

							$scope.xmlHttp.open("GET","http://localhost:5000/demoMongo",true);

							$scope.xmlHttp.send(null);



						}
						$mdDialog.hide();
					}
				}]
		});
	};

	$scope.demo = function(){
		console.log("El objeto hasta el momento es: ",$scope.nuevoRegistro);

	}



});




