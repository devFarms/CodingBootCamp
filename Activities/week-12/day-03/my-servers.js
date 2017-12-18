var http = require("http");

var PORT = 8080;

function handleRequest(req, resp){
    resp.end("We made a server." + req.url);
};

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("listening on: http://localhost:" + PORT);
})