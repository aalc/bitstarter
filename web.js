var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 var helloFile = fs.readFileSync(require('path').resolve(__dirname, 'index.html'),'utf8');    
 response.send(helloFile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

