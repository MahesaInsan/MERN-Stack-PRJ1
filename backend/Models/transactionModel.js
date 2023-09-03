const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    amount:{
        type: Number,
        required: true
    },
    card_id:{
        type: String,
        required: true
    },
    type_id:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    }
}, {timestamps: true})