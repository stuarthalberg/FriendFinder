//MY sql password in a separate key file
var key = require('../../keys.js');

//node modules
var path = require('path');
var mysql = require('mysql');
var dotenv = require('dotenv');

//fire up dotenv
dotenv.config();

//sql connection
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME
});

module.exports = function(app){

  app.get('/api/friends', function (req, res) {
    //do something here to get data from MySql

    //send some data from MySql
    res.send('This is working!');
  });

  app.post('/api/friends', function (req, res) {
    var friend = req.body;
    //do something to post data to MySql AND compare new friend to others in the DB

    //send the compatible friend back to the user
	  res.send();
  });
};
