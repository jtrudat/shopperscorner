const express = require('express')
const topicsrouter = express.Router()
const topicsController = require('../controllers/topics-controller')



topicsrouter.get('/:pid', topicsController.getTopicById)

topicsrouter.get('/user/:uid', topicsController.getTopicByUserId)

topicsrouter.post('/', topicsController.createTopic)

topicsrouter.put('/:pid', topicsController.updateTopicbyId)

topicsrouter.delete('/:pid', topicsController.deleteTopicbyId)

module.exports = topicsrouter



// topicsrouter.get('/user/:uid', (req, res)=>{
//     const userId = req.params.uid
//     const place = DUMMY_PLACES.find(p =>{
//         return (
//             p.creator === userId
//         )
//     })
//     res.json({place})
// })