var express = require('express');
var student = require('./routes/student');

var app = express();
var port = 3000;

app.use('/students/', student);

app.listen(port, function () {
  console.log("Server is running on " + port);
});
