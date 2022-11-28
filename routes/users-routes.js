const express = require('express')
const usersrouter = express.Router()
const usersController = require('../controllers/users-controller')



usersrouter.get('/', usersController.getUsers)

usersrouter.post('/signup', usersController.signup)

usersrouter.post('/login', usersController.login)


module.exports = usersrouter