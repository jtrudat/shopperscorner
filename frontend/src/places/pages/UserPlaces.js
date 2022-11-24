import React from 'react'
import { PlaceList } from '../components/PlaceList'
import { useParams } from 'react-router-dom'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Wakanda',
        description: 'secret city deep within the confines of Lake Turkana',
        imageUrl: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iVEFk8dO4Tgo/v0/-1x-1.png',
        address: 'unknown 🤷‍♂️',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Atlantis',
        description: 'underwater sea dwelling nation',
        imageUrl: 'https://i0.wp.com/knightedgemedia.com/wp-content/uploads/2021/10/e3fee38412bf3c5b0a39f2ad59d71ef6-1024x592.jpg?resize=625%2C361&ssl=1',
        address: 'atlantic ocean',
        location: {
            lat: 38.177184,
            lng: -26.425420
        },
        creator: 'u2'
    },
    {
        id: 'p3',
        title: 'quantum realm',
        description: 'underwater sea dwelling nation',
        imageUrl: 'https://www.gamerevolution.com/wp-content/uploads/sites/2/2022/10/ant-man-and-the-wasp-quantumania-trailer-quantum-realm.jpg',
        address: 'subspace',
        location: {
            lat: 10.00001,
            lng: -10.00001
        },
        creator: 'u1'
    }
]

export const UserPlaces = ()=>{
    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return (
        <PlaceList items={loadedPlaces}/>
    )
}