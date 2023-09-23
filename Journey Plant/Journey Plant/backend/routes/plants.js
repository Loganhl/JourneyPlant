const express = require('express')
const {
    createPlant,
    getPlants,
    getPlant,
    deletePlant,
    updatePlant
} = require('../controllers/plantController')


const router = express.Router()

//Gets plants.
router.get('/', getPlants)

//Gets singular plant.
router.get('/:id', getPlant)

//Posts new plant.
router.post('/', createPlant)

//Deletes a plant.
router.delete('/:id', deletePlant)

//Updates Plant.
router.patch('/:id', updatePlant)


module.exports = router