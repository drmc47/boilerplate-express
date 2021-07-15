var express = require('express');
var app = express();


app.get('/', (req, res) => {
  // res.send('Hello Express'); 
  app.use('/public', express.static(__dirname + '/public'));
  res.sendFile(__dirname + '/views/index.html')
  
})

//console.log('Hello World')



































 module.exports = app;
