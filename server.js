var myData = require("./server-assets/myData.js");
var express = require("express");
var bodyparser = require("body-parser");
var app = express();

app.use(bodyparser.json());

app.use(express.static(__dirname + '/'));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get("/family", function(req, res) {
    var data = myData.getFamilyMembers();
    res.send(data);
});

app.post("/family/new", function(req, res) {
   res.send(myData.addFamilyMembers({name: req.body.name, age: req.body.age, relationship: req.body.relationship}));
});

app.get("/friends", function(req, res) {
    var data = myData.getFriends();
    res.send(data);
});

app.post("/friends/new", function(req, res) {
    console.log(req.body);
    res.send(myData.addFriends({name: req.body.name, age: req.body.age, met: req.body.met}));
});

app.get("/activities", function(req, res) {
    var data = myData.getActivities();
    res.send(data);
});

app.post("/activities/new", function(req, res) {
   res.send(myData.addActivity({name: req.body.name}));
});

app.get("/me", function(req, res) {
    var data = myData.getMe();
    res.send(data);
});

app.listen(3000);
