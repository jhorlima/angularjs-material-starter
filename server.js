const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get("/", function (req, res) {
    res.sendFile(path.resolve('public/index.html'));
});

app.all("/*", function (req, res) {
    res.redirect('/');
});

http.createServer(app).listen(80, function () {
    console.log('Servidor http na porta: ' + this.address().port);
});