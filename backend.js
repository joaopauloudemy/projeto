var http = require('http');

http.createServer(
    function(req,res){
        res.end("Ola");
    }
).listen(9000);

console.log("servidor");