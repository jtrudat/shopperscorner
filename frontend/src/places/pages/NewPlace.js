import React from 'react'
import { Input } from '../../shared/components/formelements/Input'
import { Button } from '../../shared/components/formelements/Button'
import { useForm } from '../../shared/custom/hkform'
import axios from 'axios'
import { useContext } from 'react'
import { AuthorizeContext } from '../../shared/context/AuthorizeContext'
import { useHistory } from 'react-router-dom'



export const NewPlace = ()=>{
    //USECONTEXT USED TO GET THE USERS ID FROM THE INITIAL LOGIN RES.JSON FOR THE CREATORS BLOCK OF THE TOPIC MODEL
    //THIS IS A KEY VALUE FOR THE 1 TO MANY BINDING WITHIN THE TOPICS CONTROLLER
    const authority = useContext(AuthorizeContext)
    const [ formState, handleInput] = useForm({
        topic: {
            value: ''
        },
        description: {
            value: ''
        }
    })

    const history = useHistory()

    //AXIOS IS THE PREFERRED METHOD TO PROXY TO THE SERVER. THIS AXIOS REQUEST IS ROUTED TO THE TOPICS CONTROLLER WHICH USES THE TOPIC MODEL
    //TO FINALIZE THE COMPLETETION. THIS IS PROCESS ALSO INCLUDES THE 1 TO MANY USER TO TOPICS ASSOCIATION WHICH IS ACCOMPLISHED THROUGH MONGO DB SESSIONS
    const handleSubmitTopic = async (evt)=>{
        evt.preventDefault()
        await axios.post('/api/places', {
        topic : formState.inputs.topic.value,
        description : formState.inputs.description.value,
        creator : authority.userId
        })
        .then(()=>{
            console.log(authority.userId)
            history.push(`/${authority.userId}/topics`)
        })

    }



    return(
        
        <form className="place-form" onSubmit={handleSubmitTopic}>
            <Input 
                id="topic" 
                element="input" 
                type="text" 
                label="Topic" 
                validators={[]} 
                onInput={handleInput}/>
            <Input 
                id="description" 
                element="textarea" 
                type="text" 
                label="Description" 
                validators={[]} 
                onInput={handleInput}/>
            <Button type="submit">add this topic</Button>
            </form>
    )
}


// const newPlaceReducer = ( state, action ) =>{
//     switch(action.type){
//         case 'INPUT_CHANGE':
            
//             return(
//                 {
//                     ...state,
//                     inputs:{
//                         ...state.inputs, 
//                         [action.inputId]: {value: action.value}
//                     }
//                 });
        
//         default:
//             return (state)
//     }
// }

// const [ formState, dispatch] = useReducer(newPlaceReducer, {
    //     inputs: {
    //         topic: {
    //             value: '',
    //             isValid: true
    //         },
    //         description: {
    //             value: '',
    //             isValid: true
    //         }
    //     }
    // })