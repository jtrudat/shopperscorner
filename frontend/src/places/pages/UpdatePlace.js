import React from 'react'
import { useParams } from 'react-router-dom'
import { Input } from '../../shared/components/formelements/Input'
import { Button } from '../../shared/components/formelements/Button'
import { useForm } from '../../shared/custom/hkform'

const DUMMY_PLACES = [
    {
        id: 'p1',
        topic: 'Wakanda',
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
        topic: 'Atlantiss',
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
        topic: 'quantum realm',
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

export const UpdatePlace=()=>{

    const topicId = useParams().topicId

    const identifiedTopic = DUMMY_PLACES.find((t)=>
        t.id === topicId
    )

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

    if (!identifiedTopic){
        return (
            <div className="center"><h2>no topic</h2></div>
        )
    }

    const handlerUpdateTopic = (evt)=>{
        evt.preventDefault()
        console.log(formState.inputs)
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