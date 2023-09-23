const mongoose = require('mongoose')

const Schema = mongoose.Schema

const plantSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Plant', plantSchema)
