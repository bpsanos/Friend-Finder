var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 8080;

app.listen(port, () => console.log("Listening on port %s", port));