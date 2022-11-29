//DEPENDENCIES
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true},
    password: String,
    image: String,
    topics: [{ type: mongoose.Types.ObjectId, ref: 'Topic'}]
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)

// const mongoose = require('mongoose')
// const { Schema } = mongoose

//SCHEMA PARAMETERS FOR EACH NEW MODEL ITEM
// const userSchema = new Schema({
//     email : String,
//     password : String,
//     street : String,
//     postalcode : String,
//     city : String
//     });

//EXPORT AND MODEL COLLECTION WILL BE KNOWN AS items IN MONGODB
// const User = mongoose.model('User', userSchema)
// module.exports = User