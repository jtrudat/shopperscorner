import React from 'react'
import { Input } from '../../shared/components/formelements/Input'

export const NewPlace = ()=>{
    return(
        <form className="place-form">
            <Input element="input" type="text" label="Title"/>
            </form>
    )
}