const DUMMY_PLACES = [
    {
        id: 'p1',
        place: 'empire building',
        description: 'awesome place',
        creator: 'u1'
    },
    {
        id: 'p2',
        place: 'carmax building',
        description: 'awesome place',
        creator: 'u2'
    },
    {
        id: 'p3',
        place: 'industrial building',
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
    res.json({place})
}

const getTopicByUserId = (req, res)=>{
    const userId = req.params.uid
    const user = DUMMY_PLACES.find(u =>{
        return (
            u.creator === userId
        )
    })
    res.json({user})
}

exports.getTopicById = getTopicById
exports.getTopicByUserId = getTopicByUserId