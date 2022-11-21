//DEPENDENCIES
const express = require('express')

const router = express.Router()

const signupController = require('../controllers/signupcontroller')

const loginController = require('../controllers/logincontroller')

router.get('/signup', signupController)

router.get('/login', loginController)

//EXPORT
module.exports = router
