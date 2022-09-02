const Message = require("./store");
const messageData = new Message();
const config = require('./../../config/index');


function addMessage(chat,user, message, file){
    return new Promise((resolve, reject) =>{
        let pathFile = '';
        if(!user || !message){
            console.error("[messageController] No hay usuario o mensaje")
            return reject("No se pudo mandar el mensaje.");
        }else{
            if(file){
                pathFile = config.pathApp+"app/public/upload/"+file;
            }
            console.log(pathFile);
            const fullMessage = {
                chat,
                user,
                message,
                pathFile,
                date: new Date()
            }
            messageData.addMessage(fullMessage)
            resolve(fullMessage)
        }  
    });
}

function getMessages(filterMessages){
    return new Promise((resolve, reject)=>{
        resolve(messageData.getMessages(filterMessages))
    });
}

function updateMessage(id, message){
    return new Promise(async (resolve, reject) => {
        if(!id || !message){
           reject('Invalid Data') 
        }
        const result = await messageData.updateText(id, message);
        resolve(result)
    });
}

function deleteMessage(id){
    return new Promise((resolve, reject) =>{
        if(!id){
            reject("Id invalido.");
            return false;
        }
        messageData.remove(id).then(()=>{
            resolve();
        }).catch(e => {
            reject(e)
        });
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
};