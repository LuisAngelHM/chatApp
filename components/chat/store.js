const Model = require('./model');

class Chat
{
    add(chat){
        const myChat = new Model(chat);
        return myChat.save()
    }

    list(userId){
        return new Promise((resolve, reject) => {
            let filter = {};
            if(userId){
                filter = {
                    users:userId,
                }
            }
            Model.find(filter)
            .populate('users')
            .exec((error, populated) => {
                if(error){
                    reject(error);
                }
                resolve(populated)
            });            
        });

    }
}


module.exports = Chat;
