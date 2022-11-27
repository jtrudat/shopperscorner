const express = require('express')
const usersrouter = express.Router()


usersrouter.get('/', (req, res)=>{
    console.log(`get request is topics`)
    res.json('today')
})

module.exports = usersrouter