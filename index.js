const express = require('express');
const app = express();
const port = 4000;

app.get('/', function(req, res){
  res.send('Hello My name is TRI_AGUNG');
});

app.post('/', function(req, res){
  res.send('Hello My name is TRI_AGUNG_PRASETIO but it from post');
});

app.put('/', function(req, res){
  res.send('Hello My name is TRI_AGUNG_PRASETIO but it from put');
});

app.delete('/', function(req, res){
  res.send('Hello My name is TRI_AGUNG_PRASETIO but it from delete');
});

app.listen(port, function(){
  console.log('Hello my apps is running on port '+port);
});