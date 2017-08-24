
//require the packages we need
var express=require('express');
var app=express();

//set the port
var port = process.env.PORT || 3000;

app.get('/',function(req,res,next){
     var myIp = req.headers['X-Forwarded-For'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;

     var lang = req.headers["accept-language"].split(',')[0];
     

     res.json({"ip":myIp,"lang":lang});	
});

app.listen(port,function(){
	console.log("App listening on port: " + port);
});