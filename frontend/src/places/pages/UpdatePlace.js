import React from 'react'
import { useParams } from 'react-router-dom'
import { Input } from '../../shared/components/formelements/Input'
import { Button } from '../../shared/components/formelements/Button'
import { useForm } from '../../shared/custom/hkform'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
// import { useHistory } from 'react'

// const DUMMY_PLACES = [
//     {
//         id: 'p1',
//         topic: 'Wakanda',
//         description: 'secret city deep within the confines of Lake Turkana',
//         imageUrl: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iVEFk8dO4Tgo/v0/-1x-1.png',
//         address: 'unknown 🤷‍♂️',
//         location: {
//             lat: 40.7484405,
//             lng: -73.9878584
//         },
//         creator: 'u1'
//     },
//     {
//         id: 'p2',
//         topic: 'Atlantiss',
//         description: 'underwater sea dwelling nation',
//         imageUrl: 'https://i0.wp.com/knightedgemedia.com/wp-content/uploads/2021/10/e3fee38412bf3c5b0a39f2ad59d71ef6-1024x592.jpg?resize=625%2C361&ssl=1',
//         address: 'atlantic ocean',
//         location: {
//             lat: 38.177184,
//             lng: -26.425420
//         },
//         creator: 'u2'
//     },
//     {
//         id: 'p3',
//         topic: 'quantum realm',
//         description: 'underwater sea dwelling nation',
//         imageUrl: 'https://www.gamerevolution.com/wp-content/uploads/sites/2/2022/10/ant-man-and-the-wasp-quantumania-trailer-quantum-realm.jpg',
//         address: 'subspace',
//         location: {
//             lat: 10.00001,
//             lng: -10.00001
//         },
//         creator: 'u1'
//     }
// ]

export const UpdatePlace=  ()=>{

    const topicId = useParams().topicId

//    // const authority = useContext(AuthorizeContext)
    const [loadedPlaces, setLoadedPlaces ] = useState('')
    
    // const refresh = useHistory()
    useEffect(()=>{
        axios.get(`/api/places/${topicId}`)
        .then((response)=>{
            console.log(response.data.place)
            setLoadedPlaces(response.data.place)
        })
    }, [])

    const identifiedTopic = loadedPlaces

    const [ formState, handleInput ] = useForm({
        topic: {
            value: identifiedTopic.topic,
            isValid: true
        },
        description:{
            value: identifiedTopic.description,
            isValid: true
        }
    })

    const myid =()=>{
        console.log(topicId)
        console.log(loadedPlaces)
    }

    if (!identifiedTopic){
        return (
            <div className="center">
                <h2>no topic</h2>
                <button onClick={myid}></button>
                </div>
            
        )
    }
    
    const handlerUpdateTopic = async (evt)=>{
        evt.preventDefault()
        await axios.put(`/api/places/${topicId}`, {
            topic : formState.inputs.topic.value,
            description : formState.inputs.description.value,
        
            })
            .then((response)=>{
               console.log(response)
              
            })
    }

    return(
        
        <form className="place-form" onSubmit={handlerUpdateTopic}>
            <Input 
                id="topic" 
                element="input" 
                type="text" 
                label="Topic"
                validators={[]} 
                onInput={handleInput} 
                value={formState.inputs.topic.value}/>
            <Input 
                id="description" 
                element="textarea"  
                label="Description"
                validators={[]} 
                onInput={handleInput} 
                value={formState.inputs.description.value}/>
            <Button type="submit">update this info</Button>
        </form>
    )

}