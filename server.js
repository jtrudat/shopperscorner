//DEPENDENCIES 
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const usersRoutes = require('./routes/users-routes')
const topicsRoute = require('./routes/topics-route')



//Configuration - PORTS and Server
require('dotenv').config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

// FOR FRONTEND DEPLOYMENT ONLY Have Node serve the files for the built React app
//WHEN DEPLOYING TO HEROKU THE BACKEND PACKAGE JSON MUST BE EXPOSED AT THE ROOT  AND THIS BUILD DIRECTORY 
//MUST BE EXPOSED TO THE ROOT OF THE FRONTEND WITH THE FRONTEND PACKAGE JSON EXPOSED 
app.use(express.static(path.resolve(__dirname, './frontend/build')))
    

//MIDDLEWARE FOR ALL INCOMING TRAFFIC GOES THROUGH APP.USE PARAMETERS
//NEEDED FOR ACCURATE DATA PARSING SO THE DATA CAN BE USED APPROPRIATELY BY THE CONTROLLER
app.use(bodyParser.json())

//NEEDED FOR CROSS ORIGIN REQUESTS
app.use(cors())



//FORWARDING ALL TRAFFIC TO THE USERS ROUTER
app.use('/api/users', usersRoutes)

//FORWARDING ALL TRAFFIC TO THE TOPICS ROUTER 
app.use('/api/places', topicsRoute)


//THIS IS WRITTEN SO THAT THE BACKEND SERVER ONLY CONECTS AND RECEIVES TRAFFIC ONCE A CONNECTION TO THE DATABASE HAS BEEN MADE
//THIS IS IMPORTANT BECAUSE PASSWORD AUTHENTICATION VIA COMPARISON CAN ONLY OCCUR IF DATABASE RETRIEVAL IS POSSIBLE
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    app.listen(PORT)
    console.log(`mongodb connected on atlas and server listening on ${PORT}`)
})




