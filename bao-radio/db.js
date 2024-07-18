const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
}).then (()=> {
    console.log('hola it passed')
})

const db = mongoose.connection; 
db.on('error', console.error.bind(console, 'mongo connection error'))

const songSchema = new Schema({
    title: {type:String, require: true, minlength:1, maxlength:50},
    artist: {type:String, require: true, minlength:1, maxlength: 50}
}, {
    collection: 'Songs'
})

const Song = mongoose.model('Song', songSchema)

module.exports = {Song};