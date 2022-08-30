const express = require("express");
var app = express();

app.use('/', function(req, res) {
    res.send("hola")
});

const port = 3000;
app.listen(port);
console.log("La aplicacion esta escuchando en: http://127.0.0.1:"+port);

