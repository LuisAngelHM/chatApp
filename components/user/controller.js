const User = require("./store");
const userData = new User();

function addUser(userName){
    return new Promise((resolve, reject) =>{
        if(!userName){
            console.error("No hay usuario")
            return reject("No se pudo mandar el mensaje.");
        }else{
            const user = {
                name: userName
            }
            userData.addUser(user)
            resolve(user)
        }  
    });
}

function getUser(filterUser){
    return new Promise((resolve, reject)=>{
        resolve(userData.getUser(filterUser))
    });
}


function deleteUser(id){
    return new Promise((resolve, reject) =>{
        if(!id){
            reject("Id invalido.");
            return false;
        }
        userData.remove(id).then(()=>{
            resolve();
        }).catch(e => {
            reject(e)
        });
    });
}

module.exports = {
    addUser,
    getUser,
    deleteUser
};