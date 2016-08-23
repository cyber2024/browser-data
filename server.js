var express = require("express");
var app = express();

var port = 8080;

app.get('/',function(req, res){
   var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
   var agent = /\((.+?)\)/.exec(req.headers['user-agent'])[1];
   var language = req.headers['accept-language'].split(';')[0];
   var headers = req.headers;
   var data = {ip: ip, language:language, software:agent};
   res.send(data);
    
});

app.listen(8080);