var port = Number(process.env.PORT || 8080);
var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/article/:guid', bootstrap); 
app.get('/', bootstrap);

function bootstrap(req, res) {
  res.sendFile('public/index.html', { root: __dirname });
}

app.listen(port);
console.log('listening on '+port);
