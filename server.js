var express = require('express'),
    app = express();
    

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger('dev'));
});

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});


app.use(function(req, res, next) {
	res.sendfile(__dirname + req.url);
});

app.listen(3000);
