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
        image: "https://placekitten.com/g/200/310",
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
