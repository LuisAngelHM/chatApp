const Model = require('./model');

class User
{
    addUser(user){
        const MyUser = new Model(user)
        MyUser.save();
    }   
    async getUser(filterUser){
        let filters = {};
        if(filterUser!==null){
            filters = {user:filterUser};
        }
        const users = await Model.find(filters);
        return users;  
    }

    remove(id){
        return new Promise((resolve, reject)=>{
            Model.findOneAndDelete({_id : id}).then((usuario)=>{
                if(usuario){
                    resolve("Usuario eliminado");
                }else{
                    reject("Usuario no encontrado");
                }
            }).catch(err => {
                reject("Error al eliminar usuario");
            });
        });
    }
}

module.exports = User;