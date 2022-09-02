const Chat = require("./store");
const chatData = new Chat();

function getList(userId){
    return chatData.list(userId);
}

function addChat(users){
    if(!users || !Array.isArray(users)){
        return Promise.reject("Invalid Data");
    }else{
        const chat = {
            users
        };
        return chatData.add(chat);
    }
}

module.exports = {
    getList,
    addChat
}