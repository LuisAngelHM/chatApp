const mongoose  =  require('mongoose');
const Schema =  mongoose.Schema;
const mySchema =  new Schema({
    chat:{
        type: Schema.ObjectId,
        ref: "chat"
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        require: true
    },
    message: {
        type: String,
        require: true
    },
    pathFile:String,
    date:  Date
});
const model = mongoose.model('chatApp', mySchema);
module.exports =  model;