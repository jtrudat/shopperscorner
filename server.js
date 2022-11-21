//DEPENDENCIES - ENSURE NODEMON/EXPRESS/MONGOOSE/CORS/ INSTALLED
const express = require('express')
const app = express()
const authRoutes = require('./routes/authroutes')
const mongoose = require('mongoose')


//Configuration - PORTS and Server
require('dotenv').config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

app.use(authRoutes)

// app.listen(PORT, ()=>{
//     console.log(`listening on port ${PORT}`)
// })

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    app.listen(PORT)
    console.log(`mongodb connected on atlas and server listening on ${PORT}`)
})