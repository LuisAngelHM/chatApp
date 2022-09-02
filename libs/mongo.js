const db = require('mongoose');
const config = require('./../config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;


db.Promise = global.Promise;
async function connect(){
    db.connect(MONGO_URI, {useNewUrlParser: true}).then(()=>{
        console.log('Connected Success');
    }).catch(err=>{
        console.log(err);
    });
}

function disconnect(){
    mongoose.connection.close(() =>{
        return true
    });
    return false;
}



module.exports = {  
    connect,
    disconnect} ;