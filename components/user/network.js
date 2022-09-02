const express = require("express");
const response = require('../../network/response');
const controller =  require("./controller");
const router =  express.Router();


router.get('/', function(req, res){
    const filterUser = req.query.user || null;
    controller.getUser(filterUser).then((responseData)=>{
        response.success(req, res, responseData,200);
    }).catch(e=>{
        console.log(e)
        response.error(req,res, "Error al caargar los datos", 400)
    });
    
});

router.post('/', function(req, res){
    controller.addUser(req.body.user).then((fullMessage) =>{
        response.success(req, res, fullMessage,201);
    }).catch(e =>{
        console.log(e)
        response.error(req,res, "Información no válida", 400);
    });
});

router.delete('/:id', function(req, res){
    controller.deleteUser(req.params.id).then(()=>{
        response.success(req, res, `El usuario ${req.params.id} se ha eliminado.`, 200);
    }).catch(err => {
        console.log(err);
        response.error(req, res, err ,400);
    });
});
module.exports = router;

