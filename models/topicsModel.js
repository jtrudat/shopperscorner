//DEPENDENCIES
const mongoose = require('mongoose')

//MODEL USED TO ESTABLISH THE COLLECTION NAME IN THE DATABSE OF TOPICS AND SETS THE PROPERTIES OF EACH VALUE
//WITHIN THE MODEL. ALSO, THE CREATOR TYPE SPECIFICATION OF MONGOOSE OBJECT ID IS NEEDED TO HELP SEARCH FOR AND
//ESTABLISH THE 1 TO MANY RELATIONSHIP BETWEEN USER AND TOPICS
const Schema = mongoose.Schema

const topicSchema = new Schema({

    topic: String,
    description: String,
    image: String,
    creator: { type: mongoose.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Topic', topicSchema)