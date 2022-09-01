const Message = require("./store");
const messageData = new Message();


function addMessage(user, message){
    return new Promise((resolve, reject) =>{
        if(!user || !message){
            console.error("[messageController] No hay usuario o mensaje")
            return reject("No se pudo mandar el mensaje.");
        }else{
            const fullMessage = {
                user,
                message,
                date: new Date()
            }
        
            messageData.addMessage(fullMessage)
            resolve(fullMessage)
        }  
    });
}

function getMessages(){
    return new Promise((resolve, reject)=>{
        resolve(messageData.getMessages())
    });
}

module.exports = {
    addMessage,
    getMessages,
};