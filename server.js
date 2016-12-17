// build a web server code along

var http = require('http');
// built in, no need to install


var goodPhrases = [
    "You are a better dancer than I would have guessed to look at you.",
    "You are a good listener.",
    "You're not afraid to mix patterns.",
    "You always do your dishes right after eating.",
    "You take good care of your pets.",
    "You keep your room clean."
];

var PORT = 7000;

var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log(`server is listening on http://localhost:${PORT}`);
});

function handleRequest(request, response){
    // a generic function to handle requests and responses
    response.end(getPhrase(goodPhrases));
}

var badPhrases = [
    "You give up too easily",
    "You really should call your family more.",
    "You're lazy.",
    "You watch too much TV.",
    "You only remember things that reflect well on you.",
    "Your hair is limp and greasy.",
    "You are quick to take offense and push people away."
];

var PORT2 = 7500;

var server2 = http.createServer(handleRequest2);
server2.listen(PORT2, function(){
    console.log(`server is listening on http://localhost:${PORT2}`);
});

function handleRequest2(request, response){
    // a generic function to handle requests and responses
    response.end(getPhrase(badPhrases));
}

function getPhrase(array){
    var phraseIndex = 0;
    phraseIndex = Math.floor(Math.random() * array.length);
    return array[phraseIndex];
}