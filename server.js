const express = require("express");
const app = express();
const server = require('http').Server(app);
const cors = require('cors');

const bodyParser = require("body-parser");
const db = require('./libs/mongo');
const router = require('./network/routes');
const socket = require('./socket');

const response = require('./network/response');
const config = require('./config/index');
const fs = require('fs')
const path = config.pathUpload;
db.connect();
if(!fs.existsSync(path)){
    fs.mkdirSync(path, {recursive:true})
}
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(router);
socket.connect(server)
router(app);
app.use('/app', express.static('public'));
const port = config.port || 3000;
server.listen(port, function(){
    console.log("La aplicación esta escuchando en: http://127.0.0.1:"+port);
});


