var express = require('express');
var app = express();


const mySecret = process.env['MESSAGE_STYLE']
app.use('/public', express.static(__dirname + '/public'));
pruebaMiddleware = (req, res, next) => {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();

}

app.use(pruebaMiddleware);

app.get('/', (req, res) => {
  // res.send('Hello Express'); 
  
  res.sendFile(__dirname + '/views/index.html')
  
})

app.get('/json', (req, res) => {

  if (process.env.MESSAGE_STYLE == 'uppercase') {
  res.json({message : 'HELLO JSON'})
  }
  else {
    res.json({message : 'Hello json'})
  }
})
//console.log('Hello World')

 module.exports = app;
