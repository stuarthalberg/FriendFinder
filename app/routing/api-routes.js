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
    database: "friendFinder"
});

module.exports = function(app){

  app.get('/api/friends', function (req, res) {
    connection.query('SELECT * FROM friends', function(err, response){
      if(err) throw err;
      res.send(response);
    });
  });

  app.post('/api/friends', function (req, res) {
    console.log('HIT');
    var friend = req.body;
    console.log(friend);
    connection.query('INSERT INTO friends SET ?', friend,
      function(err){
        if(err) throw err;
        res.send('Success!');
      });
  });
};
