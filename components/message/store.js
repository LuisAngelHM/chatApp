const Model = require('./model');

class Message
{
    addMessage(message){
        console.log(message);
        const MyMessage = new Model(message)
        MyMessage.save();
    }   
    getMessages(filterMessages){
        return new Promise((resolve, reject)=>{
            let filters = {};
            if(filterMessages!==null){
                filters = {user:filterMessages};
            }
            Model.find(filters)
            .populate('user')
            .exec((error, populated)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(populated);
                }
            });
        });    
    }

    async updateText(id, message){
        const foundMessage = await Model.findOne({
            _id: id
        });
        foundMessage.message = message;
        const newMessage = await foundMessage.save();
        return newMessage;
    }

    remove(id){
        return new Promise((resolve, reject)=>{
            Model.findOneAndDelete({_id : id}).then((message)=>{
                if(message){
                    resolve("Mensaje eliminado");
                }else{
                    reject("Mensaje no encontrado");
                }
            }).catch(err => {
                reject("Error al eliminar mensaje");
            });
        });
    }
}

module.exports = Message;
