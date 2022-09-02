const express = require("express");
const response = require('../../network/response');
const controller =  require("./controller");
const router =  express.Router();


router.get('/:userId', function(req, res){
    controller.getList(req.params.userId)
        .then(data => {
            response.success(req,res,data,200);
        }).catch(error =>{
            console.log(error);
            response.error(req,res, "Error", 500);
        });
});

router.post('/', function(req, res){;
    controller.addChat(req.body.users)
        .then(data =>{
            response.success(req,res, data,201);
        }).catch(error =>{
            response.error(req, res, "Error", 500);
        });
});


module.exports = router;

