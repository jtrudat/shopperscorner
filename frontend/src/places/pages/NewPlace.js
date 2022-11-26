import React from 'react'
// import { useCallback } from 'react'
// import { useReducer } from 'react'
import { Input } from '../../shared/components/formelements/Input'
//import { VALIDATOR_REQUIRE } from '../../shared/checker/validators'
import { Button } from '../../shared/components/formelements/Button'
import { useForm } from '../../shared/custom/hkform'

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

export const NewPlace = ()=>{

    const [ formState, handleInput] = useForm({
        topic: {
            value: ''
        },
        description: {
            value: ''
        }
    })

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
     



    

    const handleSubmitTopic = (evt)=>{
        evt.preventDefault()
        console.log(formState.inputs)
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