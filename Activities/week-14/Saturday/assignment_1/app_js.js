// require express, body parser, and axios

var express = require("express");
var bodyParser = require("body-parser");
var axios = require("axios");


// set up middleware, whats that even mean tho???
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json)


// write a get request send some json data
app.get("/", function(req,res){
    res.json({name: "Eliza"})
});


// write a post request - get data from the 
// body and send it back as json

app.get("/", function(req,res){
    var body = req.body;
    res.json(body)
});


//write axios requests to hit the routes!
axios.get("/")
.then(function(res){
    console.log(res.data);
})
.catch(function(err){
    console.log(err);
})

axios.post("/", )
.then(function(res){
    console.log(res.data);
})
.catch(function(err){
    console.log(err);
})