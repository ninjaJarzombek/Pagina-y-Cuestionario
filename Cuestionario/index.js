const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5001

var app = require('express')();
var http = require('http').Server(app);


app.get('/',function(req,res)
{
	//res.send('<h1>Hello world</h1>');
	res.sendFile(__dirname+'/form.html');
});

app.get('/demoMongo',function(req,res)
{

	var MongoClient = require('mongodb').MongoClient;
	// var url = 'mongodb://localhost:27017/';
	//var url = 'mongodb+srv://b08walls:53285329@cluster0-oo4wz.mongodb.net/test'


	var url = "mongodb+srv://b08walls:tevalemadres@cluster0-oo4wz.mongodb.net/test";

	MongoClient.connect(url,function(err,db){
		if(err){
			console.log("error en conexion");
			throw err;
		}

		var dbo = db.db("Tugger");
		dbo.collection("demosep").find({}).toArray(function(err,result){
			if(err){
				console.log("error en query");
				throw err;
			}

			console.log(result);
			cargarDatos(result);
			db.close();
		});
	})


	var cargarDatos = function(valores)
	{
		if(valores != undefined){
			console.log("el resultado esta definido");

			var respuesta = "";

			valores.forEach(function(item){
				respuesta += JSON.stringify(item);
			})

			res.send(respuesta);
		}
		else{
			console.log("el resultado no esta definido");
		}	
	}
	//res.sendFile(__dirname+'/app.js');
});



app.use(express.static(__dirname+'/public'))

app.get('/app.js',function(req,res)
{
	//res.send('<h1>Hello world</h1>');
	res.sendFile(__dirname+'/app.js');
});

http.listen(PORT,function(){console.log("INIT OK!")})


// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))




