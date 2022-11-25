import React from 'react'
import { useCallback } from 'react'
import { Input } from '../../shared/components/formelements/Input'
import { VALIDATOR_REQUIRE } from '../../shared/checker/validators'

export const NewPlace = ()=>{

    const handleInput = useCallback((id, value) =>{

    },[])

    const handleDescription = useCallback((id, value) =>{

    },[])

    return(
        <form className="place-form">
            <Input id="topic" element="input" type="text" label="Topic" validators={[VALIDATOR_REQUIRE()]} onInput={handleInput}/>
            <Input id="description" element="textarea" type="text" label="Description" validators={[VALIDATOR_REQUIRE()]} onInput={handleDescription}/>
            </form>
            
    )
}