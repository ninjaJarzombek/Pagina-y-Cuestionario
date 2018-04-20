
var print = console.log;

var arregloClualquiera = [1,2,3,4,5,6,7,8,9];


var mongodbDemo = [];

var objeto1 = {};

objeto1.id = 0;
objeto1.nombre = "Octavio";
objeto1.apellido = "Paredes";

var objeto2 = {};

objeto2.id = 1;
objeto2.nombre = "Aurelio";
objeto2.apellido = "Canto";

var objeto3 = {};

objeto3.id = 2;
objeto3.nombre = "Beto";
objeto3.apellido = "Vidaña";

var objeto4 = {};

objeto4.id = 3;
objeto4.nombre = "Misael(que cagado)";
objeto4.apellido = "Nasta";

mongodbDemo = [objeto1,objeto2,objeto3,objeto4];


arregloClualquiera.forEach(function(x){

	/*

	var query = {id: x};

	MongoDbClient.collections("licenciaturas").find(query).toArray(function(err,res){
		if(err) throw err;


	})*/


	var resultado = mongodbDemo.find(function(item){

		console.log("El item iterado es: ",item,"dentro de la busqueda: ",x);
		return item.id == x;

	});

	console.log("RESULTADO DE LA BUSQUEDA: ",resultado);

});