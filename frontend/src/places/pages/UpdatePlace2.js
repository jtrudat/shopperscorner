import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
 import { useHistory } from 'react-router-dom'

export const UpdatePlace2 = ()=>{
    //USEPARAMS IS DESIGNED TO THE CURRENT TOPIC ID USED FOR REFERENCE BY AXIOS AND TOPIC ROUTER TO UPDATE THE CORRECT TOPIC
    const topicId = useParams().topicId
    const [ changeTopic, setChangeTopic] = useState('')
    const [ changeDescription, setChangeDescription] = useState('')
    const [ loadedPlaces, setLoadedPlaces] = useState('')
    const history = useHistory()

    //A HOOK DESIGNED TO ENSURE THE UPDATED STATE 
    useEffect(()=>{
        axios.get(`/api/places/${topicId}`)
        .then((response)=>{
            setLoadedPlaces(response.data.place)
        })
    }, [])

    //A RENDER INDICATING THAT THE TOPIC WAS INAPPROPRIATLEY DISASSOCIATED FROM THE USER AND THAT A MANUAL FIX IN THE DATABASE WILL NEED TO BE MADE  
    if(!loadedPlaces){
        return(
            <div>
                <h2>TOPIC DOES NOT EXIST</h2>
            </div>
        )
    }

    const handleChangeTopic =(evt)=>{
        setChangeTopic(evt.target.value)
    }

    const handleChangeDescription = (evt)=>{
        setChangeDescription(evt.target.value)
    }

    const handleSubmitTopic =()=>{
        axios.put(`/api/places/${topicId}`, {
            topic: changeTopic,
            description: changeDescription
        })
        //THIS PUSH IS AN EFFICIENT WAY TO SEND THE USER BACK TO THE TOPICS TO VIEW THE UDPATED CHANGES
        .then((response)=>{
             history.push('/user/topics')
        })
        
    }

    return(
        <div>
            <div className="place-form">
            <label>Topic  : </label>
            <br></br>
            <input className = "place-form" type="text"  size="40" defaultValue={loadedPlaces.topic} onChange={handleChangeTopic}></input>
            <br></br>
            <br></br>
            <label>Description : </label>
            <textarea className="place-form" type="text"  rows="4" cols="40" defaultValue={loadedPlaces.description} onChange={handleChangeDescription}></textarea>
            <br></br>
            <button className="button" onClick={handleSubmitTopic}>update</button>
            </div>
        </div>
    )
}
