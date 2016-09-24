var path = require('path');

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
