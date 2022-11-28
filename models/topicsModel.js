const mongoose = require('mongoose')

const Schema = mongoose.Schema

const topicSchema = new Schema({

    topic: String,
    description: String,
    image: String,
    creator: String
})

module.exports = mongoose.model('Topic', topicSchema)