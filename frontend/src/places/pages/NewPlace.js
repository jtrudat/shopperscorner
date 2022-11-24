import React from 'react'
import { useCallback } from 'react'
import { Input } from '../../shared/components/formelements/Input'

export const NewPlace = ()=>{

    const titleInputHandler = useCallback((id, value) =>{

    },[])

    return(
        <form className="place-form">
            <Input id="topic" element="input" type="text" label="Topic" onInput={titleInputHandler}/>
            <Input id="description" element="textarea" type="text" label="Description" onInput={titleInputHandler}/>
            </form>
            
    )
}