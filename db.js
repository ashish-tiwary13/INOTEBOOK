const mongoose = require('mongoose');

const {MOGOURI} = require('./config/keys')

const connectTOMongo = ()=> {
    mongoose.connect(MOGOURI,()=>{
        console.log("connected to Mongo successfuly")
    })
}
module.exports = connectTOMongo;