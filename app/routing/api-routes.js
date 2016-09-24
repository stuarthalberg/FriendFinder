//MY sql password in a separate key file
var key = require('../../keys.js');

//node modules
var path = require('path');
var mysql = require('mysql');

//sql connection
var connection = mysql.createConnection({
    host: "mydbinstance.coacymxlgea4.us-west-2.rds.amazonaws.com",
    port: 3306,
    user: "spencercharest",
    password: key,
    database: "Bamazon"
});

module.exports = function(app){

  app.get('/api/friends', function (req, res) {
    //do something here to get data from MySql

    //send some data from MySql
    res.send();
  });

  app.post('/api/friends', function (req, res) {
    var friend = req.body;
    //do something to post data to MySql AND compare new friend to others in the DB

    //send the compatible friend back to the user
	  res.send();
  });
};
