
//require the packages we need
var express=require('express');
var app=express();
var useragent=require('useragent');


//set the port
var port = process.env.PORT || 3000;

app.get('/',function(req,res,next){
     
     var myIp = req.headers['X-Forwarded-For'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;

     var lang = req.headers["accept-language"].split(',')[0];
     
     var agent = useragent.parse(req.headers['user-agent']);
     var os = agent.toString();

     res.json({"ip":myIp,"lang":lang,"OS":os});	
});

app.listen(port,function(){
	console.log("App listening on port: " + port);
});