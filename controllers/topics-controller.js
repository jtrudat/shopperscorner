const Topic = require('../models/topicsModel') 
const User = require('../models/userModel')
const mongoose = require('mongoose')


//FINDS THE TOPIC BY THE TOPIC'S MONGO ID
const getTopicById = async (req, res)=>{
    const placeId = req.params.pid
    let place = await Topic.findById(placeId)
     
    
    if (!place){
        return res.status(404).json({message: 'not found'})
    }
    else{
        res.json({place: place.toObject( {getters: true} )})
    }
    
}

//FINDS ALL TOPICS ASSIGNED TO THE ARRAY ASSOCIATED WITH THE USER'S ID
const getTopicsByUserId = async (req, res)=>{
    const userId = req.params.uid
    let users = await Topic.find({creator : userId})
    
    
    if (!users){
        res.status(404).json({message: 'not found'})
    }
    else{
        res.json({places : users.map(users =>users.toObject())})
    }
}

// ONE TO MANY ASSOCIATION WITHIN A SINGLE SESSION - CREATES A NEW TOPIC, ASSIGNS THE MONGO ID, AND USES A DB SESSION
// TO ASSOCIATE THE NEW TOPIC ID TO THE CREATOR(USER) ID
const createTopic = async (req, res) =>{
    const { topic, description, creator } = req.body

    const createdTopic = new Topic({
        topic : topic,
        description : description,
        image : 'https://i.pinimg.com/originals/32/1a/4d/321a4d071785577f60d6d7ecc483e1fc.jpg',
        creator : creator
    })

    let user = await User.findById(creator)
    const sess = await mongoose.startSession()
    sess.startTransaction()
    await createdTopic.save({session: sess})
    user.topics.push(createdTopic)
    await user.save({session: sess})
    await sess.commitTransaction()
    
     res.status(200).json({topic: createdTopic})
}

// UPDATES TOPIC BY ASSIGNED MONG ID
const updateTopicbyId = async (req, res)=>{
    const { topic, description } = req.body
    const topicId = req.params.pid

    let updatedTopic = await Topic.findById(topicId)
  
    updatedTopic.topic = topic
    updatedTopic.description = description
    await updatedTopic.save()
    res.status(200).json({topic: updatedTopic.toObject({getters: true})})
}

    
//DELETES TOPIC BY ASSIGNED MONGO ID AND REMOVES ASSOCIATION WITHIN THE CREATOR'S ARRAY OF TOPICS 
const deleteTopicbyId = async (req, res)=>{
    const topicId = req.params.pid
    
    let deletedTopic = await Topic.findById(topicId).populate('creator')
    const sess = await mongoose.startSession()
    sess.startTransaction()
    await deletedTopic.remove({session: sess})
    deletedTopic.creator.topics.pull(deletedTopic)
    await deletedTopic.creator.save({session: sess})
    await sess.commitTransaction()
    res.status(200).json({message: 'deleted'})
}
   

exports.getTopicById = getTopicById
exports.getTopicsByUserId = getTopicsByUserId
exports.createTopic = createTopic
exports.updateTopicbyId = updateTopicbyId
exports.deleteTopicbyId = deleteTopicbyId

// let DUMMY_PLACES = [
//     {
//         id: 'p1',
//         topic: 'empire building',
//         description: 'awesome place',
//         creator: 'u1'
//     },
//     {
//         id: 'p2',
//         topic: 'carmax building',
//         description: 'awesome place',
//         creator: 'u2'
//     },
//     {
//         id: 'p3',
//         topic: 'industrial building',
//         description: 'awesome place',
//         creator: 'u3'
//     },
//     {
//         id: 'p4',
//         topic: 'industrial building',
//         description: 'awesome place',
//         creator: 'u3'
//     }
// ]


    // DUMMY_PLACES.find(p =>{
    //     return (
    //         p.id === placeId
    //     )
    // })

// DUMMY_PLACES.filter(u =>{
    //     return (
    //         u.creator === userId
    //     )
    // })

// const createdTopic ={
    //     id : String(Math.random()),        
    //     topic : topic,
    //     description: description,
    //     creator : creator
    // }
    // DUMMY_PLACES.push(createdTopic)

// const updatedTopic = {...DUMMY_PLACES.find(p => p.id === topicId)}
    // const placeIndex = DUMMY_PLACES.findIndex(p => p.id === topicId)

    // updatedTopic.topic = topic
    // updatedTopic.description = description
    // await updatedTopic.save()
    // res.status(200).json({topic: updatedTopic. toObject({getters: true})})
    // DUMMY_PLACES[placeIndex] = updatedTopic
