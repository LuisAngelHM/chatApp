const express = require("express");
const bodyParser = require("body-parser");
const response = require('./network/response');
const router = require('./network/routes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(router);
router(app);

app.use('/app', express.static('public'));
const port = 3001;
app.listen(port);
console.log("La aplicacion esta escuchando en: http://127.0.0.1:"+port);

