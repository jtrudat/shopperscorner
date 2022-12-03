//DEPENDENCIES
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

//MODEL USED TO ESTABLISH THE COLLECTION NAME IN THE DATABSE OF USERS AND SETS THE PROPERTIES OF EACH VALUE
//WITHIN THE MODEL. ALSO, THE TOPICS TYPE SPECIFICATION OF MONGOOSE OBJECT ID IS NEEDED TO HELP SEARCH FOR AND
//ESTABLISH THE 1 TO MANY RELATIONSHIP BETWEEN USER AND TOPICS
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