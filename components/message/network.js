const express = require("express");
const response = require('../../network/response');
const controller =  require("./controller");
const multer = require("multer");
const path = require('path');
const router =  express.Router();
const config = require('./../../config/index');
let fileName = '';
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,config.pathUpload)
    },
    filename:function(req,file,cb){
        fileName = file.originalname;
        cb(null,Date.now()+path.extname(file.originalname)); //Appending extension
    }
});
var upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (!file.originalname.match(/\.(pdf|doc|docx|jpg|png|jpeg)$/)) {
            return cb(new Error('Error en el tipo de archivo.'));
        }
    cb(null, true);
 }
});


router.get('/', function(req, res){
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages).then((responseData)=>{
        response.success(req, res, responseData,200);
    }).catch(e=>{
        console.log(e)
        response.error(req,res, "Error al caargar los datos", 400)
    });
    
});

router.post('/', upload.single('file'), function(req, res){
    req.file ? fileName=fileName: fileName=null ;
    console.log(fileName);
    controller.addMessage(req.body.chat,req.body.user, req.body.message, fileName).then((fullMessage) =>{
        response.success(req, res, fullMessage,201);
    }).catch(e =>{
        console.log(e)
        response.error(req,res, "Información no válida", 400);
    });
});

router.patch('/:id', function(req,res){
    controller.updateMessage(req.params.id, req.body.message).then((responseData) => {
        response.success(req,res,responseData, 200);
    }).catch(e => {
        console.log(e);
        response.error(req,res, "Información no válida", 400);
    }); 
});

router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id).then(()=>{
        response.success(req, res, `El mensaje ${req.params.id} se ha eliminado.`, 200);
    }).catch(err => {
        console.log(err);
        response.error(req, res, err ,400);
    });
});
module.exports = router;

