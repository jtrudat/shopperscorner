//DEPENDENCIES
const express = require('express')
const usersrouter = express.Router()
const usersController = require('../controllers/users-controller')


//ALL ROUTES DEFINED
usersrouter.get('/', usersController.getUsers)

usersrouter.post('/signup', usersController.signup)

usersrouter.post('/login', usersController.login)


module.exports = usersrouter