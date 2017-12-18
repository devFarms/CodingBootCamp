var http = require("http");

var PORT = 8080;

function handleRequest(req, resp){
    resp.end("We made a server. But, why?" + req.url);
};

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("listening on: http://localhost:" + PORT);
})

/*

Using the previous example as a guide, create an app that has two web servers.
One that listens on port 7000 and one that listens on port 7500.
The one listening on port 7000 will always tell the user something good about themselves.
The one listening on 7500 will always tell the user something bad about themselves.
Make sure you create a Github repo and commit this code!

Bonus

Look for other ways to expand what your server can do. As possibilities:
Generate the good/bad phrase randomly from a list of predefined phrases
Use the twitter package inside the response to also return a random tweet

[11:01] 
Start off by running npm init as well

var http = require("http");

var PORT7000 = 7000;
var PORT7000 = 7500;

function handleRequest7000(req, resp){
    resp.end("This is port 7000" + req.url);
};

function handleRequest7500(req, resp){
    resp.end("This is port 7500" + req.url);
};

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("listening on: http://localhost:" + PORT7000);
})

*/