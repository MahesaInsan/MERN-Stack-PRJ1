const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true,
        default: 0
    }
    /* user_id:{
        type: String,
        required: true
    } */
})

module.exports = mongoose.model('Card', cardSchema)