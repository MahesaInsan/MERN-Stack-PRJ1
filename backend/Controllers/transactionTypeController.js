const transactionType = require('../Models/transactionTypeModel')
const mongoose = require('mongoose');

const createType = async (req, res)=>{
    const {name, type} = req.body

    try {
        const transType = await transactionType.create({name, type})
        res.status(200).json(transType)
    }catch (error) {
        res.status(401).json({error: error.message})
    }
}

const getAllType = async(req, res)=>{
    const transType = await transactionType.find({})

    res.status(200).json(transType)
}

const getType = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "Type is not found"})
    }

    const transType = await transactionType.findById(id)
    if(!transType){
        res.status(404).json({error: "Type is not found"})
    }

    res.status(200).json(transType)
}

const updateType = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "Type is not found"})
    }

    const transType = await transactionType.findOneAndUpdate({_id: id}, {...req.body})
    if(!transType){
        res.status(404).json({error: "Type is not found"})
    }

    res.status(200).json(transType)
}

const deleteType = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "Type is not found"})
    }

    const transType = await transactionType.findOneAndDelete({_id: id})
    if(!transType){
        res.status(404).json({error: "Type is not found"})
    }

    res.status(200).json(transType)
}

module.exports = {
    createType,
    getAllType,
    getType,
    updateType,
    deleteType
}