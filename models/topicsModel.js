const mongoose = require('mongoose')


const Schema = mongoose.Schema

const topicSchema = new Schema({

    topic: String,
    description: String,
    image: String,
    creator: { type: mongoose.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Topic', topicSchema)