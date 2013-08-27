var express = require('express');

var fs = require('fs');


var data = new buffer(fs.readFileSync("index.html"));

var app = express.createServer(express.logger());
app.use(express.logger());

data = fs.readFileSync(buffer.toString("data"));

app.get('/', function(request, response) {
  response.send(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
