var express = require("express");
var history = require("connect-history-api-fallback");

var app = express()
  .use(history())
  .use(express.static("dist"));

app.get("/", function(req, res) {
  res.sendfile("./index.html");
});

var server = app.listen(8080, function() {
  var port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
});
