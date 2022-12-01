import React from 'react'
import { useParams } from 'react-router-dom'
//import { Input } from '../../shared/components/formelements/Input'
//import { Button } from '../../shared/components/formelements/Button'
//import { useForm } from '../../shared/custom/hkform'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export const UpdatePlace2 = ()=>{
    const topicId = useParams().topicId
    const [ changeTopic, setChangeTopic] = useState('')
    const [ changeDescription, setChangeDescription] = useState('')
    const [ loadedPlaces, setLoadedPlaces] = useState('')

    
    useEffect(()=>{
        axios.get(`/api/places/${topicId}`)
        .then((response)=>{
            setLoadedPlaces(response.data.place)
        })
    }, [])

    if(!loadedPlaces){
        return(
            <div>
                <h2>no places yet</h2>
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
        .then((response)=>{
            console.log(response.data)
        })
    }

    return(
        <div>
            <label>Topic</label>
            <input type="text"  defaultValue={loadedPlaces.topic} onChange={handleChangeTopic}></input>
            <br></br>
            <label>Description</label>
            <input type="text"  defaultValue={loadedPlaces.description} onChange={handleChangeDescription}></input>
            <button onClick={handleSubmitTopic}>ready to update</button>
            
        </div>
    )
}
// }value={loadedPlaces.topic}
// value={loadedPlaces.description}