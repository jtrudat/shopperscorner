//const uuid = require('uuid/v3')
const Topic = require('../models/topicsModel') 


let DUMMY_PLACES = [
    {
        id: 'p1',
        topic: 'empire building',
        description: 'awesome place',
        creator: 'u1'
    },
    {
        id: 'p2',
        topic: 'carmax building',
        description: 'awesome place',
        creator: 'u2'
    },
    {
        id: 'p3',
        topic: 'industrial building',
        description: 'awesome place',
        creator: 'u3'
    },
    {
        id: 'p4',
        topic: 'industrial building',
        description: 'awesome place',
        creator: 'u3'
    }
]

const getTopicById = (req, res)=>{
    const placeId = req.params.pid
    const place = DUMMY_PLACES.find(p =>{
        return (
            p.id === placeId
        )
    })
    if (!place){
        res.status(404).json({message: 'not found'})
    }
    else{
        res.json({place})
    }
    
}

const getTopicsByUserId = (req, res)=>{
    const userId = req.params.uid
    const users = DUMMY_PLACES.filter(u =>{
        return (
            u.creator === userId
        )
    })
    if (!users){
        res.status(404).json({message: 'not found'})
    }
    else{
        res.json({users})
    }
}

const createTopic = async (req, res) =>{
    const { topic, description, creator } = req.body

    const createdTopic = new Topic({
        topic : topic,
        description : description,
        image : 'https://placekitten.com/g/200/310',
        creator : creator
    })
    await createdTopic.save()
    // const createdTopic ={
    //     id : String(Math.random()),        
    //     topic : topic,
    //     description: description,
    //     creator : creator
    // }
    // DUMMY_PLACES.push(createdTopic)
     res.status(200).json({topic: createdTopic})
}

const updateTopicbyId = (req, res)=>{
    const { topic, description } = req.body
    const topicId = req.params.pid
    const updatedTopic = {...DUMMY_PLACES.find(p => p.id === topicId)}
    const placeIndex = DUMMY_PLACES.findIndex(p => p.id === topicId)
    updatedTopic.topic = topic
    updatedTopic.description = description
    DUMMY_PLACES[placeIndex] = updatedTopic
    res.status(200).json({topic: updatedTopic})
}

const deleteTopicbyId = (req, res)=>{
    
    const topicId = req.params.pid
    DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== topicId)
    res.status(200).json({message: "deleted"})
}

exports.getTopicById = getTopicById
exports.getTopicsByUserId = getTopicsByUserId
exports.createTopic = createTopic
exports.updateTopicbyId = updateTopicbyId
exports.deleteTopicbyId = deleteTopicbyId