import React from 'react'
import { useCallback } from 'react'
import { useReducer } from 'react'
import { Input } from '../../shared/components/formelements/Input'
import { VALIDATOR_REQUIRE } from '../../shared/checker/validators'
import { Button } from '../../shared/components/formelements/Button'

const newPlaceReducer = ( state, action ) =>{
    switch(action.type){
        case 'INPUT_CHANGE':
            // let formValid = true
            // for (const inputId in state.inputs)
            return(
                {
                    ...state,
                    inputs:{
                        ...state.inputs, 
                        [action.inputId]: {value: action.value}
                    }
                });
        
        default:
            return (state)
    }
}

export const NewPlace = ()=>{


    const [ formState, dispatch] = useReducer(newPlaceReducer, {
        inputs: {
            topic: {
                value: ''
            },
            description: {
                value: ''
            }
        }
    })
     

    const handleInput = useCallback((id, value) =>{
        dispatch({type:'INPUT_CHANGE', value: value, inputId : id})
    },[dispatch])

    const handleDescription = useCallback((id, value) =>{
        dispatch({type:'INPUT_CHANGE', value: value, inputId : id})
    },[dispatch])

    const handleSubmitTopic = (evt)=>{
        evt.preventDefault()
        console.log(formState.inputs)
    }

    return(
        <form className="place-form" onSubmit={handleSubmitTopic}>
            <Input id="topic" element="input" type="text" label="Topic" validators={[VALIDATOR_REQUIRE()]} onInput={handleInput}/>
            <Input id="description" element="textarea" type="text" label="Description" validators={[VALIDATOR_REQUIRE()]} onInput={handleDescription}/>
            <Button type="submit">add this topic</Button>
            </form>
            
    )
}