var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello Worlsdfadfd!  this a code');
});
app.get('/foo', function (req, res) {
    res.send('Hello Worldsfsodfhkshdfkjkd!');
  });
  app.get('/bar', function (req, res) {
    res.send('Hello Worldsfsodfhkshdfkjkd!');
  });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// ITS HUST A COMEENT TO CHECK