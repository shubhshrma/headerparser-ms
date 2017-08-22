
//require the packages we need
var express=require('express');
var app=express();

//set the port
var port = process.env.PORT || 3000;

app.get('/',function(req,res,next){
      res.json({'ip':req.ip});
});

app.listen(port,function(){
	console.log("App listening on port" + port);
});