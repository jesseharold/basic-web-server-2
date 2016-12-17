// build a web server code along

var http = require('http');
// built in, no need to install

var PORT = 7000;

var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log(`server is listening on http://localhost:${PORT}`);
});

function handleRequest(request, response){
    // a generic function to handle requests and responses
    response.end("You are a better dancer than I would have guessed to look at you.");
}


var PORT2 = 7500;

var server2 = http.createServer(handleRequest2);
server2.listen(PORT2, function(){
    console.log(`server is listening on http://localhost:${PORT2}`);
});

function handleRequest2(request, response){
    // a generic function to handle requests and responses
    response.end("You give up too easily and you really should call your family more.");
}