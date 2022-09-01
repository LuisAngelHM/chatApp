const express = require("express");
const response = require('../../network/response');
const controller =  require("./controller");
const router =  express.Router();

router.get('/', function(req, res){
    controller.getMessages().then((responseData)=>{
        response.succes(req, res, responseData,200);
    }).catch(e=>{
        console.log(e)
        response.error(req,res, "Error al caargar los datos", 400)
    });
    
});

router.post('/', function(req, res){
    controller.addMessage(req.body.user, req.body.message).then((fullMessage) =>{
        response.succes(req, res, fullMessage,201);
    }).catch(e =>{
        console.log(e)
        response.error(req,res, "Información no válida", 400);
    });
});
module.exports = router;

