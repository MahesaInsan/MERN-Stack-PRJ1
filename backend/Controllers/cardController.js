const mongoose = require('mongoose');
const Card = require('../Models/cardModel')

const createCard = async (req, res)=>{
    const {name, amount}= req.body
    /* const user_id = req.user._id */

    try{
        const card = await Card.create({name, amount/*, user_id */})
        res.status(200).json(card)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

const getAllCard = async (req, res)=>{
    const cards = await Card.find({})
    
    res.status(200).json(cards)
}

const getCard = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'Card not found'})
    }

    const card = await Card.findById(id)
    if(!card){
        return res.status(404).json({error: 'Card not found'})
    }

    res.status(200).json(card)
}

const deleteCard = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'Card not found'})
    }

    const card = await Card.findOneAndDelete({_id: id})
    if(!card){
        res.status(404).json({error: 'Card not found'})
    }

    res.status(200).json(card)
}

const updateCard = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'Card not found'})
    }

    const card = await Card.findOneAndUpdate({_id: id}, {...req.body})
    if(!card){
        res.status(404).json({error: 'Card not found'})
    }

    res.status(200).json(card)
}


module.exports = {
    getAllCard,
    getCard,
    createCard,
    updateCard,
    deleteCard
}