/* we need:
-express
-express-handlebars
-body-parser
-mysql
*/

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});

var handlebars = require('express-handlebars');

path     = require('path'),
app.set('views', path.resolve(__dirname, 'views'));
app.engine("handlebars", handlebars({
    extname: '.handlebars',
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/layouts')
  }));


app.set('view engine', 'handlebars');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host            : 'db',
    port            : '3306',
    user            : 'kyrie',
    password        : 'irving',
    database        : 'nba'
});

connection.connect(function(err){
	if(err){
		console.log("ERROR: MYSQL CONNECTION FAILED");
		console.log(err)
		return process.exit(22);
	}

	console.log("Successfully connected");
});

/* app.get goes here */
app.get('/', function(req, res){
	console.log('inside of app.get for the home page');

	var sqlQuery = 'select * from players where id <= 3';

	connection.query(sqlQuery, function(error, results, fields){
		if(error) throw error;

		console.log("NBA Players: ");
		console.log(results);

		res.render('home', {
			title: "Top 3 players",
			results: results
		});
	});
});


var port = 8080;
app.listen(port, function(){
	console.log('app listening on port: ' + port);
});


