const User = require('../models/userModel')
const Topic = require('../models/topicsModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// let DUMMY_USERS =[
//     {
//         id: 'u1',
//         name: ' Joe Blow',
//         email: 'j@gmail.com',
//         password: 'dummyuser'
//     },
//     {
//         id: 'u2',
//         name: ' Moe Doe',
//         email: 'm@gmail.com',
//         password: 'dummyuser2'
//     },
//     {
//         id: 'u3',
//         name: 'Frank Tank',
//         email: 'ft@gmail.com',
//         password: 'dummyuser3'
//     }
// ]

const getUsers = async (req, res)=>{
    let users = await User.find({}, 'email name image topics')
    // res.status(200).json({users: DUMMY_USERS})
    res.status(200).json({users: users.map(user=>user.toObject())})
}

const signup = async (req, res)=>{
    //Minor destructuring to practice DRY
    const { name, email, password } = req.body

    // const userExist = DUMMY_USERS.find(u => u.email === email)
    // if (userExist){
    //      return res.json('user present')
    // }

    let existingUser = await User.findOne({ email: email})
    if (existingUser){
        const error = 'user already exists, go to login'
        return (error)
    }

    //Math.random generates a number, so must be converted to string fo query references
    
    // const createdUser = {
    //     id: String(Math.random()),
    //     name : name,
    //     email : email,
    //     password: password
    // }
    // DUMMY_USERS.push(createdUser)
    // res.status(200).json({createdUser})

    let hashedPassword
    hashedPassword = await bcrypt.hash(password, 4)

    const createdUser = new User({
        name : name,
        email: email,
        image: "data:image/jpeg;base64,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",
        password : hashedPassword,
        topics : []
    })
    await createdUser.save()

    let token
    token = jwt.sign(
        {userId: createdUser._id},
         'authenticate'
         );

    res.status(200).json({user: createdUser.toObject()})
}

const login = async (req, res)=>{
    //Minor destructuring to practice DRY
    const { email, password } = req.body

    let existingUser = await User.findOne({ email: email})

    if (!existingUser){

      return  res.status(400).json({message: 'sorry cant not verify'})
    }
    
        let isValidPassword = false
        isValidPassword = await bcrypt.compare(password, existingUser.password)

    if (!isValidPassword){
        return res.json ('invalid')
    }

        let token
    token = jwt.sign(
        {userId: existingUser._id},
         'authenticate'
         );

        return res.status(200).json({user: existingUser.toObject()})
    }

        

    // const identifiedUser = DUMMY_USERS.find(u => u.email === email)
    // if (!identifiedUser || identifiedUser.password !== password){
    //     res.status(400).json({message: 'sorry cant not verify'})
    // }
    // else{res.status(200).json(`welcome and logged in for ${identifiedUser.email}`)}


exports.getUsers = getUsers
exports.signup = signup
exports.login = login
