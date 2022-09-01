const db = require('../../libs/mongo');
const Model = require('./model');

class Message
{
    constructor(){
        db();
    }  
    addMessage(message){
        const MyMessage = new Model(message)
        MyMessage.save();
    }   
    async getMessages(){
        const messages = await Model.find();
        return messages[0];  
    }
}

module.exports = Message;
