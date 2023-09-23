require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const plantRoutes = require ('./routes/plants')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/plants', plantRoutes)

//Databade Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{

        app.listen(process.env.PORT, () => {
            console.log('Connected & Listening on port', process.env.PORT)
        })
        

    })
    .catch((error)=> {
        console.log(error)
    })

