var express = require('express'); 
var app = express(); 
app.get('/', function (req, res) { 
res.send('Welcome to Express App! This is a scaffolded project in express'); 
}); 
app.listen(8000, function () { 
console.log('Example app listening on port 8000!'); 
}); 