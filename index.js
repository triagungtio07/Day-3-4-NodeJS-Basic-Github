const express = require('express');
const app = express();
const port = 5000;

app.get('/', function(req, res){
  res.send('Hello My name is TRI_AGUNG_PRASETIO');
});

app.listen(port, function(){
  console.log('Hello my apps is running on port '+port);
});