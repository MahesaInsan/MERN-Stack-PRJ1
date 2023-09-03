const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        unique: true,
        required: true
    }
}, {timestamps: true})

userSchema.statics.register = async function (name, email, password){
    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({name, email, password: hash})

    return user
}

userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({email})
    if(!user){
        throw Error('Email doesnt exist')
    }
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error('Incorrect password')
    }
    return user
}

module.exports = mongoose.model('User', userSchema)