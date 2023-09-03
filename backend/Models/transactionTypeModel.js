const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionTypeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        enum: ['Income', 'Outcome']
    }
})

module.exports = mongoose.model('TransactionType', transactionTypeSchema)