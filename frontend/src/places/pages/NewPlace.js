import React from 'react'
// import { useCallback } from 'react'
// import { useReducer } from 'react'
import { Input } from '../../shared/components/formelements/Input'
//import { VALIDATOR_REQUIRE } from '../../shared/checker/validators'
import { Button } from '../../shared/components/formelements/Button'
import { useForm } from '../../shared/custom/hkform'
import axios from 'axios'
import { useContext } from 'react'
import { AuthorizeContext } from '../../shared/context/AuthorizeContext'
import { useHistory } from 'react-router-dom'



export const NewPlace = ()=>{
    const authority = useContext(AuthorizeContext)
    const [ formState, handleInput] = useForm({
        topic: {
            value: ''
        },
        description: {
            value: ''
        }
    })

const refresh = useHistory()

    const handleSubmitTopic = async (evt)=>{
        evt.preventDefault()
        //console.log(formState.inputs.description.value)
        // console.log(authority.userId)

        await axios.post('/api/places', {
        topic : formState.inputs.topic.value,
        description : formState.inputs.description.value,
        creator : authority.userId
        })
        .then(()=>{
            console.log(authority.userId)
            refresh.push('/')
        })



        //         const response = await fetch('http://localhost:4100/api/users/signup', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         topic: formState.inputs.topic.value,
//         description: formState.inputs.description.value,
//         creator: ''
//     })
// })
// const responseData = await response.json()

    }

const idSync = ()=>{
    console.log(authority.userId)
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
            <button onClick={idSync}>MYID</button>
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