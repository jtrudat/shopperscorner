//DEPENDENCIES - ENSURE NODEMON/EXPRESS/MONGOOSE/CORS/ INSTALLED
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const path = require('path')
const authRoutes = require('./routes/authroutes')
const mongoose = require('mongoose')


//Configuration - PORTS and Server
require('dotenv').config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

//app.use(authRoutes)

// FOR FRONTEND DEPLOYMENT ONLY Have Node serve the files for the built React app
app.use(express.static(path.resolve(__dirname, './frontend/build')))
    

//MIDDLEWARE FOR ALL INCOMING TRAFFIC GOES THROUGH APP.USE PARAMETERS
app.use(bodyParser.json())
app.use(cors())

const topicsRoute = require('./routes/topics-route')
const usersRoute = require('./routes/users-routes')



//FORWARDING ALL TRAFFIC TO THE SIGNUP ROUTER CONTROLLER
app.use('/api/places', topicsRoute)
//app.use('/')


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    app.listen(PORT)
    console.log(`mongodb connected on atlas and server listening on ${PORT}`)
})




// app.listen(PORT, ()=>{
//     console.log(`listening on port ${PORT}`)
// })
// const routerSignup = require('./routes/authroutes')
// app.use('/signup', routerSignup)