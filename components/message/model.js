const mongoose  =  require('mongoose');
const Schema =  mongoose.Schema;
const mySchema =  new Schema({
    user: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    date:  Date
});
const model = mongoose.model('chatApp', mySchema);
module.exports =  model;