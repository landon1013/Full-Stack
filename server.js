var myData = require("/server-assets/myData.js");
var express = require("express");
var bodyparser = require("body-parser");

var app = express();

app.get("/", function(req, res) {
   res.send("hello World!");
});


app.listen(3000);
