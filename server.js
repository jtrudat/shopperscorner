//DEPENDENCIES - ENSURE NODEMON/EXPRESS/MONGOOSE/CORS/ INSTALLED
const express = require('express')
const app = express()

//Configuration - PORTS and Server
require('dotenv').config()
const PORT = process.env.PORT

app.listen(PORT)
console.log(`listening on port ${PORT}`)