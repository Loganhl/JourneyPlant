const Plant = require('../models/plantModel')
const mongoose = require('mongoose')

// Get all plants.
const getPlants = async (req, res) => {
    const plants = await Plant.find({}).sort({createdAt: -1})

    res.status(200).json(plants)
}

// Get singular plant.
const getPlant = async (req,res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Plant Doesnt Exist'})
    }

    const plant = await Plant.findById(id)

    if (!plant) {
        return res.status(404).json({error: "Plant doesn't Exist!"})
    }

    res.status(200).json(plant)
}

// New plant.
const createPlant = async (req, res) => {
    const {title, location, notes} = req.body

    // Adds doc to database.
    try {
        const plant = await Plant.create({title, location, notes})
        res.status(200).json(plant)
    } catch (error) {
        res.status(400).json({error: error.message})

    }
}

// Delete plant.
const deletePlant = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Plant Doesnt Exist'})
    }

    const plant = await Plant.findOneAndDelete({_id: id})

    if (!plant) {
        return res.status(404).json({error: "Plant doesn't Exist!"})
    }

    res.status(200).json(plant)


}

// Update plant.
const updatePlant = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Plant Doesnt Exist'})
    }

    const plant = await Plant.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!plant) {
        return res.status(400).json({error: "Plant doesn't Exist!"})
    }

    res.status(200).json(plant)
}


module.exports = {
    getPlants,
    getPlant,
    createPlant,
    deletePlant,
    updatePlant
}